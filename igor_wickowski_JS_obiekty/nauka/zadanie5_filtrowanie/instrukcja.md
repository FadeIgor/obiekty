# Zadanie 5: Filtrowanie bez kasowania tablicy

## Cel

W szablonie jest lista `#lista` oraz przyciski „Tylko dostępne” (`#tylkoDostepne`) i „Pokaż wszystkie” (`#wszystkie`). W `script.js` zapisz tablicę produktów z polami `nazwa` i `dostepny`. Na starcie widać wszystkie. „Tylko dostępne” zostawia na liście te z `dostepny` równym `true`. „Pokaż wszystkie” znowu pokazuje pełną tablicę.

## Przydatne

`filter` zwraca nową tablicę. Oryginału nie nadpisuj — inaczej drugi przycisk nie ma już czego pokazać. `pokazListe` może przyjmować tablicę do wyświetlenia: całość albo wynik filtra.

## Wymagania

1. W tablicy są co najmniej trzy produkty, w tym jeden niedostępny.
2. Filtr nie kasuje oryginalnej tablicy.
3. Po „Pokaż wszystkie” wracają też pozycje niedostępne.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po otwarciu strony na liście są „Mleko”, „Chleb” i „Masło”. Kliknij „Tylko dostępne”. Zostaje „Mleko” i „Masło”. Kliknij „Pokaż wszystkie”. Znowu widać trzy nazwy, w tym „Chleb”.
