# Zadanie 7: Usuwanie wiersza

## Cel

W szablonie jest tabela z `#tableBody`. W `script.js` zapisz tablicę trzech produktów (nazwa, cena). `pokazTabele()` buduje wiersze i w każdym stawia przycisk „Usuń”. Klik kasuje **ten** rekord z tablicy (`splice`) i odświeża tabelę. Nie usuwaj tylko węzła HTML.

## Przydatne

Indeks z pętli mówi, który obiekt zdjąć. Po `splice` znowu wołasz `pokazTabele()`. Jeśli skasujesz sam `tr`, po kolejnym odświeżeniu wiersz wróci.

## Wymagania

1. Na starcie widać trzy produkty.
2. „Usuń” zdejmuje jeden rekord z tablicy i z tabeli.
3. Pozostałe wiersze zostają.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po otwarciu strony widać „Mleko”, „Chleb” i „Masło”. Kliknij „Usuń” przy „Chleb”. W tabeli zostają dwa wiersze: „Mleko” i „Masło”.
