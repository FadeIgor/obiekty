# Zadanie 2: Metoda i `this`

## Cel

W szablonie jest przycisk „Pokaż kartę” (`#opisBtn`) i pusty akapit `#wynik`. W `script.js` zapisz obiekt książki z tytułem, autorem i metodą `karta`. Metoda składa napis z pól obiektu przez `this`. Po kliknięciu ten napis ląduje w `#wynik`.

## Przydatne

Metoda to funkcja zapisana w obiekcie. Wewnątrz zwykłej `function` słowo `this` oznacza ten obiekt. Strzałka zwykle nie da tu poprawnego `this`. Wywołujesz `ksiazka.karta()`, nie wypisujesz pól obok metody.

## Wymagania

1. Obiekt ma pola tytułu i autora oraz metodę `karta`.
2. Metoda używa `this` i zwraca napis w formacie „tytuł — autor”.
3. Klik `#opisBtn` wpisuje wynik metody w `#wynik`.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Pokaż kartę”. W akapicie pojawia się „Lalka — Bolesław Prus”.
