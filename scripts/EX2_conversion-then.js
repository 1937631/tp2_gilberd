const refMain = document.querySelector('main');
const refParagraphe = document.createElement('p');
refParagraphe.innerHTML = 'Chargement...';
refMain.append(refParagraphe);
const afficherCinqPremiersResultats = (universites) => {
    refParagraphe.innerHTML = universites
        .slice(0, 5)
        .map((universite) => universite.name)
        .sort()
        .join(', ');
};
const obtenirUniversiteUSA = () => {
    fetch('http://universities.hipolabs.com/search?country=United States')
        .then((reponse) => {
        reponse.json().then((universites) => {
            afficherCinqPremiersResultats(universites);
        });
    })
        .catch((erreur) => {
        console.error('Erreur: ', erreur);
    });
};
obtenirUniversiteUSA();
//# sourceMappingURL=EX2_conversion-then.js.map