# Obiekty w mini-aplikacji

W [`11_literal_obiektu`](../../jezyk/11_literal_obiektu/) obiekt był pudełkiem z etykietami: `uczen.imie`. Wypisywałeś pola do `#wynik` i kończyłeś. W [`17_tablice_dom`](../../przegladarka/17_tablice_dom/) tablica była źródłem listy albo tabeli.

Ten dział składa te dwa pomysły w **mini-aplikację**. Uczeń klika, formularz dopisuje rekord, tabela pokazuje to, co jest w tablicy. HTML jest tylko widokiem. Gdy skasujesz wiersz w DOM, a zapomnisz `splice` w tablicy, po sortowaniu rekord wróci.

Zapis po odświeżeniu (`localStorage`, JSON) jest w [`22_storage`](../22_storage/). Ciasteczka są w [`23_ciasteczka`](../23_ciasteczka/). Klasy są w extra. Tu dane żyją w pamięci do odświeżenia karty.

Formularz znasz z [`19_formularze`](../19_formularze/): nasłuch `submit` na `<form>`, `preventDefault`, `trim`. Węzły z [`16_create_element`](../../przegladarka/16_create_element/): `createElement`, `textContent`, `appendChild`.

---

## 1. Literał — krótka powtórka

```js
const produkt = {
  nazwa: "Mleko",
  cena: 3.5,
  stan: 12,
};
```

Kropka, gdy znasz nazwę: `produkt.nazwa`. Nawias, gdy nazwa jest w zmiennej: `produkt[pole]`. `produkt.pole` szuka klucza o nazwie **pole**, nie wartości ze zmiennej.

Dopisanie i zmiana to przypisanie. Usunięcie klucza: `delete produkt.stan`. Pytanie, czy klucz jest: `"cena" in produkt`.

Typowa pomyłka: wypisać sam obiekt przez `textContent`. Przeglądarka pokaże `[object Object]`. Składaj napis z pól: `produkt.nazwa + " — " + produkt.cena + " zł"`.

---

## 2. Metoda i `this`

Metoda to funkcja zapisana w obiekcie. Wewnątrz **`this`** oznacza ten obiekt, na którym wywołałeś metodę.

```js
const ksiazka = {
  tytul: "Lalka",
  autor: "Prus",
  karta: function () {
    return this.tytul + " — " + this.autor;
  },
};

document.getElementById("wynik").textContent = ksiazka.karta();
```

Na zajęciach metoda to zwykła `function`, nie strzałka. Strzałka nie wiąże `this` tak, jak tu oczekujemy — `this.tytul` bywa `undefined`.

Typowa pomyłka: odwołać się do `tytul` bez `this` i bez parametru. W metodzie nazwa pola nie jest automatycznie widoczna.

---

## 3. Tablica obiektów to stan

```js
const produkty = [
  { nazwa: "Mleko", cena: 3.5, dostepny: true },
  { nazwa: "Chleb", cena: 4.2, dostepny: false },
];
```

Jeden rekord to jeden obiekt. Lista rekordów to tablica. Indeks `produkty[0]` to pierwszy obiekt, `produkty[0].nazwa` to jego pole.

Po każdej zmianie tablicy **budujesz widok od nowa**. Funkcja ma się nazywać `pokazListe()` albo `pokazTabele()`, nie `rysuj()` — to nie jest `canvas`.

```js
function pokazListe() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";
  for (let i = 0; i < produkty.length; i++) {
    const li = document.createElement("li");
    li.textContent = produkty[i].nazwa;
    ul.appendChild(li);
  }
}
```

Najpierw czyścisz kontener. Potem dla każdego rekordu tworzysz węzeł. Jedno przypisanie `innerHTML = ""` na starcie funkcji jest tu świadome: kasujesz stary widok, nie dane.

Typowa pomyłka: dopisać `li` do HTML i nie ruszać tablicy. Albo odwrotnie: `push` bez ponownego `pokazListe()`.

---

## 4. Tabela

Wiersz to `tr`, komórka to `td`. Nagłówek zostaje w HTML. Ciało `#tableBody` budujesz w pętli.

```js
function pokazTabele() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";
  for (let i = 0; i < produkty.length; i++) {
    const tr = document.createElement("tr");
    const tdNazwa = document.createElement("td");
    tdNazwa.textContent = produkty[i].nazwa;
    tr.appendChild(tdNazwa);
    tbody.appendChild(tr);
  }
}
```

Przycisk „Usuń” dokładasz w tej samej pętli. Indeks zapisujesz w osobnej stałej **przed** nasłuchem — `i` z `for` po zakończeniu pętli ma już inną wartość, więc `splice(i, 1)` w handlerze trafia obok.

```js
const indeks = i;
btn.addEventListener("click", function () {
  produkty.splice(indeks, 1);
  pokazTabele();
});
```

`splice(indeks, 1)` usuwa jeden element i przesuwa resztę. Usunięcie samego węzła bez `splice` zostawia rekord w tablicy. Typowa pomyłka: wołać `splice(i, 1)` w środku kliknięcia — po pętli `i` nie jest już numerem tego wiersza.

---

## 5. Filtr bez kasowania oryginału

`filter` zwraca **nową** tablicę. Oryginału nie nadpisuj, jeśli „Pokaż wszystkie” ma jeszcze działać.

```js
const dostepne = produkty.filter(function (p) {
  return p.dostepny === true;
});
pokazListe(dostepne);
```

Dlatego `pokazListe` warto nauczyć przyjmować tablicę do pokazania: całość albo wynik filtra. Źródło `produkty` zostaje nietknięte.

`find` zwraca pierwszy pasujący obiekt albo `undefined`. `findIndex` zwraca indeks albo `-1`. Przy edycji najpierw znajdź rekord, potem zmień pole: `rekord.cena = 9.9`.

Typowa pomyłka: `produkty = produkty.filter(...)`. Po takim zapisie „wszystkie” nie wrócą.

---

## 6. Dodawanie z formularza

```js
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nazwa = document.getElementById("nazwa").value.trim();
  const cena = Number(document.getElementById("cena").value);
  if (nazwa === "") {
    document.getElementById("wynik").textContent = "Podaj nazwę";
    return;
  }
  produkty.push({ nazwa: nazwa, cena: cena, dostepny: true });
  pokazTabele();
  form.reset();
  document.getElementById("wynik").textContent = "Dodano: " + nazwa;
});
```

`Number` na cenie z pola. Puste albo `NaN` nie powinny wejść do tablicy. `reset` wołasz po sukcesie, nie po błędzie.

RegEx z działu 20 nie jest tu nowym tematem. Do pustego pola wystarczy `trim`.

Typowa pomyłka: nasłuch na przycisku zamiast na `submit` formularza. Enter wtedy odświeża stronę i tablica wraca do startu.

---

## 7. Sortowanie

```js
produkty.sort(function (a, b) {
  return b.cena - a.cena;
});
pokazTabele();
```

`b.cena - a.cena` ustawia droższe wyżej. `a.cena - b.cena` — tańsze wyżej. `sort` zmienia tablicę **w miejscu**. Po sortowaniu znowu budujesz tabelę.

Napisy sortuj przez `a.nazwa.localeCompare(b.nazwa)` albo zwykłe `sort` na kopii nazw — na liczbach samo `sort()` bez funkcji porównuje jak tekst (`10` przed `2`).

Typowa pomyłka: posortować tylko wiersze HTML. Kolejność w tablicy zostaje stara, więc następne `pokazTabele()` przywraca poprzedni układ.

---

## 8. Suma i agregacja

```js
let suma = 0;
for (let i = 0; i < produkty.length; i++) {
  suma += produkty[i].cena * produkty[i].ilosc;
}
document.getElementById("suma").textContent = String(suma);
```

To samo zrobi `reduce`. Najpierw zamień ceny na liczby. Wynik wpisuj `textContent`, nie `innerHTML`.

Typowa pomyłka: dodać albo usunąć wiersz i zostawić starą sumę. Przelicz `#suma` w `pokazTabele()`, żeby jedna funkcja pilnowała i tabeli, i kwoty.

---

## 9. `Object.keys`, `values`, `entries`

Z działu 11 — tu przyda się przy podglądzie rekordu.

| Metoda | Wynik |
| ------ | ----- |
| `Object.keys(o)` | tablica nazw pól |
| `Object.values(o)` | tablica wartości |
| `Object.entries(o)` | tablica par `[klucz, wartość]` |

```js
document.getElementById("wynik").textContent = Object.keys(produkt).join(", ");
```

Typowa pomyłka: `produkt.keys()` — to nie jest metoda instancji.

---

## 10. Czego tu nie robimy

| Temat | Gdzie |
| ----- | ----- |
| `localStorage`, `JSON.stringify` | dział 22 |
| `document.cookie` | dział 23 |
| `fetch` | dział 24 |
| `class`, prototypy, `Object.create` | extra |
| `rysuj()` jako nazwa odświeżenia listy | użyj `pokazListe` / `pokazTabele` |

Tabela powyżej rozdziela ten dział od następnych. Mini-aplikacja po odświeżeniu strony wraca do tablicy wpisanej w skrypcie. To nie jest błąd — zapis na dysk przeglądarki jest następnym działem. Typowa pomyłka: wstawić tu `class` albo `localStorage`, żeby „było nowocześniej”. Na sprawdzianie to wychodzi poza temat.

---

## 11. Częste pułapki

1. **`[object Object]`** — wypisałeś cały obiekt zamiast pól.
2. **Strzałka w metodzie** — `this` nie wskazuje na rekord.
3. **Widok bez tablicy** — dodałeś `tr` ręcznie; sortowanie nie zna rekordu.
4. **`filter` nadpisuje źródło** — „Pokaż wszystkie” jest puste.
5. **Usunięcie tylko z DOM** — `splice` pominięty.
6. **`sort()` na liczbach bez funkcji** — kolejność jak napisy.
7. **Brak `preventDefault`** — po „Dodaj” strona się odświeża i tablica wraca do startu.

---

## 12. Co dalej

[`22_storage`](../22_storage/) — po odświeżeniu lista zostaje. Klasy są w [`extra/programowanie_obiektowe/`](../../extra/programowanie_obiektowe/).
