var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const obtenirUniversiteUSAAsync = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const reponse = yield fetch('http://universities.hipolabs.com/search?country=United States');
        const universites = (yield reponse.json());
        afficherCinqPremiersResultats(universites);
    }
    catch (erreur) {
        console.error('Erreur: ', erreur);
    }
});
obtenirUniversiteUSA();
//# sourceMappingURL=EX2_conversion-then.js.map