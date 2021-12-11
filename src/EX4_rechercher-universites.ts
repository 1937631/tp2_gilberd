// source: https://github.com/Hipo/university-domains-list

interface Universite {
    alpha_two_code: string;
    web_pages: string[];
    name: string;
    country: string;
    domains: string[];
    'state-province': string;
}

const refFormRecherche: HTMLInputElement = document.getElementById(
    'formRecherche'
) as HTMLInputElement;

const refChampRechercher: HTMLInputElement = document.getElementById(
    'rechercher'
) as HTMLInputElement;

const refResultatRecherche: HTMLUListElement = document.querySelector(
    '.resultat-recherche'
) as HTMLUListElement;

const refNombreResultats: HTMLUListElement = document.querySelector(
    '.nombre-resultats'
) as HTMLUListElement;

const rechercherUniversitesCanadiennes = async (recherche: string = '') => {
    /**
     * Écrire votre code ici
     */
    try {
        const reponse = await fetch(
            'http://universities.hipolabs.com/search?name=' +
                recherche +
                '&country=canada'
        );
        const universites = (await reponse.json()) as Universite[];
        afficherResultats(universites);
    } catch (erreur) {
        console.error('Erreur: ', erreur);
    }
    console.log(recherche);
};

const afficherResultats = (universites: Universite[]) => {
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
refChampRechercher.addEventListener('input', (event: InputEvent) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});

refFormRecherche.addEventListener('submit', (event: SubmitEvent) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});
