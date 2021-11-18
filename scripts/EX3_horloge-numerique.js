let jourCourant = 0;
setInterval(montrerDate, 1000);
function montrerDate() {
    let date = new Date();
    let jourDate = date.getDate();
    let heure = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let heureString = heure.toString();
    let minString = minutes.toString();
    let secString = secondes.toString();
    let langueSelectionnee = document.getElementById('selectLangue');
    let local = langueSelectionnee.value;
    heureString = heure < 10 ? '0' + heureString : heureString;
    minString = minutes < 10 ? '0' + minString : minString;
    secString = secondes < 10 ? '0' + secString : secString;
    let heureCourante = heureString + ':' + minString + ':' + secString;
    document.getElementById('horloge').innerHTML = heureCourante;
    if (jourCourant == 0 || jourDate != jourCourant) {
        let jourLangue = date.toLocaleString(local, { weekday: 'long' });
        let jourChiffreLangue = date.toLocaleString(local, { day: '2-digit' });
        let moisLangue = date.toLocaleString(local, { month: 'long' });
        let anneeLangue = date.toLocaleString(local, { year: 'numeric' });
        let dateEcrite = jourLangue +
            ' ' +
            jourChiffreLangue +
            ' ' +
            moisLangue +
            ' ' +
            anneeLangue;
        document.getElementById('date').innerHTML = dateEcrite;
        jourCourant = jourDate;
    }
    let horloge = document.getElementById('horloge');
    if (heure <= 20 && heure >= 5) {
        horloge.classList.add('jour');
        document.getElementById('date').classList.add('dateJour');
        horloge.classList.remove('nuit');
        document.getElementById('date').classList.remove('dateNuit');
    }
    else {
        horloge.classList.add('nuit');
        document.getElementById('date').classList.add('dateNuit');
        horloge.classList.remove('jour');
        document.getElementById('date').classList.remove('dateJour');
    }
}
montrerDate();
function reecrireDate() {
    let date = new Date();
    let jourDate = date.getDate();
    let langueSelectionnee = document.getElementById('selectLangue');
    let local = langueSelectionnee.value;
    let jourLangue = date.toLocaleString(local, { weekday: 'long' });
    let jourChiffreLangue = date.toLocaleString(local, { day: '2-digit' });
    let moisLangue = date.toLocaleString(local, { month: 'long' });
    let anneeLangue = date.toLocaleString(local, { year: 'numeric' });
    let dateEcrite = jourLangue +
        ' ' +
        jourChiffreLangue +
        ' ' +
        moisLangue +
        ' ' +
        anneeLangue;
    document.getElementById('date').innerHTML = dateEcrite;
    jourCourant = jourDate;
}
document
    .getElementById('selectLangue')
    .addEventListener('change', reecrireDate);
//# sourceMappingURL=EX3_horloge-numerique.js.map