setInterval(montrerDate, 1000);
function montrerDate() {
    let date = new Date();
    let jourSemaine = date.getDay();
    let jourMois = date.getDate();
    let mois = date.getMonth();
    let annee = date.getFullYear();
    let heure = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let heureString = heure.toString();
    let minString = minutes.toString();
    let secString = secondes.toString();

    heureString = heure < 10 ? '0' + heureString : heureString;
    minString = minutes < 10 ? '0' + minString : minString;
    secString = secondes < 10 ? '0' + secString : secString;

    let heureCourante = heureString + ':' + minString + ':' + secString;

    document.getElementById('horloge').innerHTML = heureCourante;

    let jourFr = '';
    let jourEn = '';
    let tableauJoursFr = [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
    ];
    let tableauJoursEn = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let moisFr = '';
    let moisEn = '';
    let tableauMoisEn = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    let tableauMoisFr = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
    ];

    jourFr = tableauJoursFr[jourSemaine];
    jourEn = tableauJoursEn[jourSemaine];

    moisFr = tableauMoisFr[mois];
    moisEn = tableauMoisEn[mois];
    let dateEcrite = '';
    let langueSelectionnee = document.getElementById(
        'selectLangue'
    ) as HTMLSelectElement;
    if (langueSelectionnee.value == 'fr-CA') {
        dateEcrite =
            jourFr +
            ' ' +
            jourMois.toString() +
            ' ' +
            moisFr +
            ' ' +
            annee.toString();
    } else {
        dateEcrite =
            jourEn +
            ' ' +
            moisEn +
            ' ' +
            jourMois.toString() +
            ' ' +
            annee.toString();
    }

    document.getElementById('date').innerHTML = dateEcrite;
    let horloge = document.getElementById('horloge');
    if (heure <= 20 && heure >= 5) {
        horloge.classList.add('jour');
        document.getElementById('date').classList.add('dateJour');
        horloge.classList.remove('nuit');
        document.getElementById('date').classList.remove('dateNuit');
    } else {
        horloge.classList.add('nuit');
        document.getElementById('date').classList.add('dateNuit');
        horloge.classList.remove('jour');
        document.getElementById('date').classList.remove('dateJour');
    }
}
montrerDate();
