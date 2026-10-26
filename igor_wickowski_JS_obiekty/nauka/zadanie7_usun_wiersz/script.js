// Twoje rozwiazanie
const produkty = [
    { nazwa: "Mleko", cena: 3.50 },
    { nazwa: "Chleb", cena: 4.20 },
    { nazwa: "Masło", cena: 7.80 }
  ];
  
  function pokazTabele() {
    const tableBody = document.getElementById("tableBody");
  
    tableBody.innerHTML = "";
  
    produkty.forEach((produkt, indeks) => {
      const wiersz = document.createElement("tr");
  
      const komorkaNazwa = document.createElement("td");
      komorkaNazwa.textContent = produkt.nazwa;
  
      const komorkaCena = document.createElement("td");
      komorkaCena.textContent = produkt.cena;
  
      const komorkaAkcja = document.createElement("td");
      const przycisk = document.createElement("button");
  
      przycisk.textContent = "Usuń";
  
      przycisk.addEventListener("click", () => {
        produkty.splice(indeks, 1);
  
        pokazTabele();
      });
  
      komorkaAkcja.appendChild(przycisk);
  
      wiersz.appendChild(komorkaNazwa);
      wiersz.appendChild(komorkaCena);
      wiersz.appendChild(komorkaAkcja);
  
      tableBody.appendChild(wiersz);
    });
  }
  
  pokazTabele();
  