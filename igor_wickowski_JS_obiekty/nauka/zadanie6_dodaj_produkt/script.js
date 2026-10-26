// Twoje rozwiazanie

const  formularz = document.getElementById('formularz')
const tableBody = document.getElementById('tableBody')


const produkt = [
    {nazwa: 'mleko', cena: 3},
    {nazwa: 'chlep', cena: 54},
]

formularz.addEventListener('submit', function(e){
    e.preventDefault()
    let nazwa = document.getElementById('nazwa').value.trim()
    let cena = Number(document.getElementById('cena').value)
    produkt.push({ nazwa: nazwa, cena: cena});
    pokazTabele();
})


function pokazTabele() {
    tableBody.innerHTML = ''
    for(i=0; i< produkt.length; i++){
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        td1.textContent = produkt[i].nazwa 
        td2.textContent = produkt[i].cena 
        tr.appendChild(td1)
        tr.appendChild(td2)
        tableBody.appendChild(tr)
    }
}

pokazTabele();