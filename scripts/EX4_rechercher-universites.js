const refFormRecherche = document.getElementById('formRecherche');
const refChampRechercher = document.getElementById('rechercher');
const refResultatRecherche = document.querySelector('.resultat-recherche');
const refNombreResultats = document.querySelector('.nombre-resultats');
const rechercherUniversitesCanadiennes = (recherche = '') => {
    console.log(recherche);
};
refChampRechercher.addEventListener('input', (event) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});
refFormRecherche.addEventListener('submit', (event) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});
//# sourceMappingURL=EX4_rechercher-universites.js.map