# Zadanie 6: Dodawanie z formularza

## Cel

W szablonie jest formularz `#formularz` z polami `#nazwa` i `#cena`, tabela z `#tableBody` oraz akapit `#wynik`. W `script.js` trzymaj tablicę produktów. Na starcie wpisz dwa rekordy. Po wysłaniu strona nie odświeża się. Niepusta nazwa (po `trim`) robi `push` nowego obiektu i odświeża tabelę. Pusta nazwa pokazuje „Podaj nazwę” i nic nie dopisuje.

## Przydatne

Nasłuch `submit` wieszasz na formularzu. `preventDefault` jest pierwszy — bez niego tablica wróci do startu. Cenę zamień przez `Number`. Po sukcesie czyścisz pola (`reset`) i wołasz `pokazTabele()`.

## Wymagania

1. Wysyłka nie odświeża strony.
2. Pusta nazwa (także same spacje) nie dodaje rekordu.
3. Poprawne dodanie widać jako nowy wiersz tabeli.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po otwarciu strony w tabeli widać dwa startowe produkty. Wpisz `Kakao` i `8.5`, kliknij „Dodaj”. W `#wynik` pojawia się „Dodano: Kakao”, a w tabeli jest trzeci wiersz. Wyczyść nazwę i wyślij znowu. W `#wynik` jest „Podaj nazwę”, liczba wierszy się nie zmienia.
