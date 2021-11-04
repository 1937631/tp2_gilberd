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

const rechercherUniversitesCanadiennes = (recherche: string = '') => {
    /**
     * Écrire votre code ici
     */
    console.log(recherche);
};

refChampRechercher.addEventListener('input', (event: InputEvent) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});

refFormRecherche.addEventListener('submit', (event: SubmitEvent) => {
    rechercherUniversitesCanadiennes(refChampRechercher.value);
});
