// Twoje rozwiazanie

const ksiazka = {
    tytul: "dsada",
    autor: "fasdf fdsa",
    okladka: function () {
        return this.tytul + ' ' + this.autor;
    },
}

const opisBtn = document.getElementById('opisBtn')

opisBtn.addEventListener('click', function(e){
    e.preventDefault()
    let wynik = document.getElementById('wynik')

    wynik.textContent = ksiazka.okladka()
})