# Zadanie 8: Magazyn — dodaj, usuń, sortuj, suma

## Cel

W szablonie jest formularz `#formularz` z polami `#nazwa`, `#cena` i `#ilosc`, przycisk „Sortuj (Cena ↓)” (`#sortCena`), tabela `#tableBody`, akapit `#wynik` i akapit `#suma`. Tablica produktów (nazwa, cena, ilość) jest stanem strony. Na starcie wpisz dwa rekordy.

Po wysłaniu niepusta nazwa dopisuje obiekt. „Usuń” w wierszu zdejmuje rekord. Sortowanie ustawia droższe wyżej. W `#suma` widać sumę `cena * ilosc` wszystkich pozycji. Po każdej zmianie odświeżasz tabelę i sumę.

## Przydatne

To połączenie zadań 6 i 7 oraz sortowania i pętli po kwotach. Pusta nazwa: „Podaj nazwę”. Sukces: „Dodano: ” i `reset`. Funkcja `pokazTabele()` może od razu przeliczyć `#suma`. Nie używaj `class` ani `localStorage`.

## Wymagania

1. Działają dodawanie, usuwanie i sortowanie na tablicy.
2. Pusta nazwa nie dodaje rekordu.
3. Suma w `#suma` zgadza się z wierszami.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po otwarciu strony w tabeli są dwa startowe produkty, a w `#suma` ich łączna wartość. Dodaj `Kakao`, cenę `8` i ilość `2`. W tabeli jest trzeci wiersz, suma rośnie o 16, w `#wynik` widać „Dodano: Kakao”. Kliknij „Sortuj (Cena ↓)”. Droższe pozycje są wyżej. Usuń jeden wiersz. Suma maleje. Wyczyść pole `#nazwa` i wyślij formularz — w `#wynik` pojawia się „Podaj nazwę”, a liczba wierszy się nie zmienia.
