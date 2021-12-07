/**
 * Utiliser l'API https://randomuser.me/api?results=10/
 *
 * Dans la section#liste, vous devez ajouter des boutons contenant une vignette d'utilisateur.
 * L'attribut alt de l'image doit être 'Afficher la fiche de ${user.name.first}'
 * Au clic sur un bouton, la fiche correspondante doit apparaitre dans la section#fiche.
 * VOIR LES CAPTURES ÉCRANS pour mieux comprendre.
 *
 * Une fonction asynchrone obtenirListeAleatoireUtilisateurs() doit être définie.
 * Elle contient une promesse que vous devez gérer avec un await et un try… catch().
 *
 * La solution doit être développée en JavaScript natif (TypeScript) avec la méthode fetch().
 * Aucune bibliothèque n'est permise.
 *
 */
let utilisateurs = [];
const ul = document.createElement('ul');
const liste = document.getElementById('liste');
liste.append(ul);
const obtenirListeAleatoireUtilisateurs = async () => {
    /**
     * Écrire votre code ici
     */
    try {
        const resultats = await fetch('https://randomuser.me/api?results=10');
        const json = await resultats.json();
        utilisateurs = json.results;
        afficherUtilisateurs(utilisateurs);
    } catch (erreur) {
        console.error('Erreur: ', erreur);
    }
};
const afficherUtilisateurs = (utilisateurs) => {
    utilisateurs.forEach((utilisateur, index) => {
        let li = document.createElement('li');
        let bouton = document.createElement('button');

        bouton.setAttribute('data-index-user', index.toString());
        let img = document.createElement('img');
        img.setAttribute('src', utilisateur.picture.large);
        img.setAttribute(
            'alt',
            'Afficher la fiche de ' + utilisateur.name.first
        );

        ul.append(li);
        li.append(bouton);
        bouton.append(img);
        console.log('test');
        bouton.addEventListener('click', apparaitreFiche);
    });
};
function apparaitreFiche(event: MouseEvent) {
    const index = (event.currentTarget as HTMLElement).getAttribute(
        'data-index-user'
    );
    const fiche = document.getElementById('fiche');
    fiche.style.display = 'block';
    const titre = document.querySelector('h2');
    titre.innerHTML =
        utilisateurs[index].name.first + ' ' + utilisateurs[index].name.last;
    const img = document.querySelector('#fiche img') as HTMLImageElement;
    img.src = utilisateurs[index].picture.large;

    const adresse = fiche.querySelector('li[data-adresse]');
    const ville = fiche.querySelector('li[data-ville]');
    const etat = fiche.querySelector('li[data-etat]');
    const codePostal = fiche.querySelector('li[data-codepostal]');
    adresse.innerHTML =
        utilisateurs[index].location.street.number +
        ' ' +
        utilisateurs[index].location.street.name;
    ville.innerHTML = utilisateurs[index].location.city;
    etat.innerHTML = utilisateurs[index].location.state;
    codePostal.innerHTML = utilisateurs[index].location.postcode;
}
obtenirListeAleatoireUtilisateurs();
