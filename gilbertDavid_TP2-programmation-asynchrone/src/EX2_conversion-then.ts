// source: https://github.com/Hipo/university-domains-list

interface Universite {
    alpha_two_code: string;
    web_pages: string[];
    name: string;
    country: string;
    domains: string[];
    'state-province': string;
}

const refMain = document.querySelector('main');
const refParagraphe = document.createElement('p');

refParagraphe.innerHTML = 'Chargement...';
refMain.append(refParagraphe);

const afficherCinqPremiersResultats = (universites: Universite[]) => {
    refParagraphe.innerHTML = universites
        .slice(0, 5)
        .map((universite) => universite.name)
        .sort()
        .join(', ');
};

const obtenirUniversiteUSA = () => {
    fetch('http://universities.hipolabs.com/search?country=United States')
        .then((reponse) => {
            reponse.json().then((universites: Universite[]) => {
                afficherCinqPremiersResultats(universites);
            });
        })
        .catch((erreur) => {
            console.error('Erreur: ', erreur);
        });
};

obtenirUniversiteUSA();
