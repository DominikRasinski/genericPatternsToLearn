# Repozytorium porusza zasady podstawowych wzorców projektowych, które warto znać jak implementować

## Wzorzec Strategia

Jest to wzorzec pozwalający na prostsze rozwijanie kodu aplikacji poprzez dozielenie kontekstu od logiki.
Strategia zazwyczaj przyjmuje taką formę:

- Interfejsu definiującego wspólną metodę uruchamiania danego algorytmu
- Klasa `context` której zadaniem jest odebranie kontekstu z głównej części aplikacji i udostępnienie metody pozwalającej na uruchomienie danego algorytmu
- Klasy algorytmów, implementują dane rozwiązanie problemu oraz muszą posiadać metodę uruchamiającą algorytm która została zdeklarowana w interfejsie strategii

### Interfejs strategii

Interfejs strategii definiuje wspólną logikę jaką każda strategia musi wystawić do użytku. W naszym przypadku jest to metoda `runAlgorithm` która jest odpowiedzialna za uruchomienie algorytmu.

```ts
interface Strategy {
    runAlgorithm(): void;
}
```

### Klasa `context` - klasa odpowiedzialna za przekazanie kontekstu (danych) do wybranej strategii i uruchomienie algorytmu

Klasa `context` jest odpowiedzialna za przekazanie kontekstu do wybranej strategii oraz uruchomienie algorytmu. W naszym przypadku klasa `context` posiada metodę `runAlgorithm` która jest odpowiedzialna za uruchomienie algorytmu.

```ts
class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public runAlgorithm(): void {
        this.strategy.runAlgorithm();
    }
}
```

### Klasa algorytmu - klasa implementująca algorytm

Klasa algorytmu jest odpowiedzialna za implementację algorytmu. W naszym przypadku klasa `ConcreteStrategyA` implementuje algorytm `runAlgorithm` zdefiniowany w interfejsie `Strategy`.

```ts
class ConcreteStrategyA implements Strategy {
    public runAlgorithm(): void {
        console.log('Running algorithm A');
    }
}
```

### Przykład użycia wzorca strategii

```ts
const context = new Context(new ConcreteStrategyA());
context.runAlgorithm();
```

## Wzorzec Dekorator

Dekorator to strukturalny wzorzec projektowy pozwalający dodawać nowe obowiązki obiektom poprzez umieszczenie tych obiektów w specjalnych obiektach opakowujących, które zawierają odpowiednie zachowania.

Aby skorzystać z wzorca dekoratora:

1. Interfejs wspólny dla nakładek jak i opakowanych obiektów
   1. Stanowi podstawę dla wszystkich klas w systemie
2. Klasa konkretnego komponentu
   1. implementuje podstawowe zachowanie
   2. stanowi bazę dla wszystkich dekoracji
3. Klasa bazowe dekoratora
   1. Zawiera referencję do opakowywanego obiektu
   2. Pośredniczy między klientem a opakowanym obiektem
4. Konkretni dekoratorzy
   1. Rozszerzają klasą bazowego dekoratora
   2. Dodają swoją funkcjonalność przed lub po wywołaniu metod opakowanego obiektu
   3. Implementują dodatkowe zachowania według potrzeb
   
TODO: dorobić przykładowy kod TS dla implementacji dekoratora