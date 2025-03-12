# Repozytorium porusza zasady podstawowych wzorców projektowych, które warto znać jak implementować

## Wzorzec Strategia

Jest to wzorzec pozwalający na prostsze rozwijanie kodu aplikacji poprzez dozielenie kontekstu od logiki.
Strategia zazwyczaj przyjmuje taką formę:

- Interfejsu definiującego wspólną metodę uruchamiania danego algorytmu
- Klasa `context` której zadaniem jest odebranie kontekstu z głównej części aplikacji i udostępnienie metody pozwalającej na uruchomienie danego algorytmu
- Klasy algorytmów, implementują dane rozwiązanie problemu oraz muszą posiadać metodę uruchamiającą algorytm która została zdeklarowana w interfejsie strategii

