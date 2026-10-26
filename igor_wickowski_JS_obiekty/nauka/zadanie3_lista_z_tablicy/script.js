// Twoje rozwiazanie
const produkt = [
    {
        nazwa: 'mleko'
    },
    {
        nazwa: 'chleb'
    },
    {
        nazwa: 'maslo'
    }
]


let ul = document.querySelector('ul')
ul.innerHTML = ''
for(i = 0; i< produkt.length; i++){
    const li = document.createElement("li")
    li.textContent = produkt[i].nazwa
    ul.appendChild(li)
}
