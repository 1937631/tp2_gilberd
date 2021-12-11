var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const refFormRecherche = document.getElementById('formRecherche');
const refChampRechercher = document.getElementById('rechercher');
const refResultatRecherche = document.querySelector('.resultat-recherche');
const refNombreResultats = document.querySelector('.nombre-resultats');
const rechercherUniversitesCanadiennes = (recherche = '') => __awaiter(this, void 0, void 0, function* () {
    try {
        const reponse = yield fetch('http://universities.hipolabs.com/search?name=' +
            recherche +
            '&country=canada');
        const universites = (yield reponse.json());
        afficherResultats(universites);
    }
    catch (erreur) {
        console.error('Erreur: ', erreur);
    }
    console.log(recherche);
});
const afficherResultats = (universites) => {
    let html = '';
    console.log(universites[0]);
    for (let cpt = 0; cpt < universites.length; cpt++) {
        html +=
            "<li><a href='" +
                universites[cpt]['web_pages'] +
                "'>" +
                universites[cpt]['name'] +
                '</a></li>';
    }
    refResultatRecherche.innerHTML = html;
};
refChampRechercher.addEventListener('input', (event) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});
refFormRecherche.addEventListener('submit', (event) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});
//# sourceMappingURL=EX4_rechercher-universites.js.map