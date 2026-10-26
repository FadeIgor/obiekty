// Twoje rozwiazanie
const produkt = {
    nazwa: 'mleko2%',
    cena: '3.5zl',
    stan: '12 szt.',
}



const btn = document.getElementById('pokaz')

btn.addEventListener('click', function(e) {
    e.preventDefault()

    let nazwa = document.getElementById('nazwa')
    let cena = document.getElementById('cena')
    let stan = document.getElementById('stan')

    nazwa.innerText = produkt.nazwa
    cena.innerText = produkt.cena
    stan.innerText = produkt.stan


})
