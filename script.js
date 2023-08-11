
let nomOdinate = Math.floor(Math.random() * (500 - 1 + 1) + 1);

let chans = 5;

while (chans > 0) {
    let nonbChwazi = prompt("Ki nonb ou chwazi itilisatè?");
    if (nonbChwazi > nomOdinate) {
        console.log('Nonb chwazi a pi gran pase nonb odinate a');
    }

    else if (nonbChwazi < nomOdinate) {
        console.log('Nonb chwazi a pi piti pase nonb odinate a');

    }
    else {
        alert("Ou jwenn bon nonb lan felisitasyon");
        break;
    }
    console.log(`Rete ou ${chans - 1} chans`);

    chans--;

}
if (chans === 0) {
    console.log("ou echwe nan jwet la, rejwe si ou vle");
}
