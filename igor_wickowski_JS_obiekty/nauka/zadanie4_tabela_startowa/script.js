// Twoje rozwiazanie

const tableBody= document.getElementById('tableBody')

const ksiazki = [
    {name: 'Lalka', autor: 'Boleslaw Prus', rok: '1890'},
    {name: 'dsa', autor: 'dwsq Prus', rok: '1890'},
    {name: 'fdshg', autor: 'Boleslaw fdasgf', rok: '1890'},
]

function pokazTabele(){
    tableBody.innerHTML = ''
    for(i = 0; i < ksiazki.length; i++){
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        td.textContent = ksiazki[i].name
        tr.appendChild(td)
        td2.textContent = ksiazki[i].autor
        tr.appendChild(td2)
        td3.textContent = ksiazki[i].rok
        tr.appendChild(td3)
        tableBody.appendChild(tr)
    }
}

pokazTabele()
