// Twoje rozwiazanie
 
const tylkoDostepne = document.getElementById('tylkoDostepne')
const wszystkie = document.getElementById('wszystkie')

const produkty = [
    {nazwa: 'mleko', dostepny: true },
    {nazwa: 'chlep', dostepny: false },
    {nazwa: 'maslo', dostepny: true },
]

const lista = document.getElementById('lista')


tylkoDostepne.addEventListener('click', function(e){
    e.preventDefault()
    lista.innerHTML = ''
    for(i=0; i< produkty.length; i++){
        if(produkty[i].dostepny == true){
            let li = document.createElement('li')
            li.textContent = produkty[i].nazwa
            lista.appendChild(li)
        }
    }
})

wszystkie.addEventListener('click', function(e){
    e.preventDefault()
    lista.innerHTML = ''
    for(i=0; i< produkty.length; i++){
        let li = document.createElement('li')
        li.textContent = produkty[i].nazwa
        lista.appendChild(li)
    }
})