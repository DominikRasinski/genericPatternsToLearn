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
