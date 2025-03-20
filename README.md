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

**Opis syntetyczny**
1. Interfejs wspólny dla nakładek jak i opakowanych obiektów
   1. Stanowi podstawę dla wszystkich klas w systemie
2. Klasa konkretnego komponentu - **klasa do udekorowania**
   1. implementuje podstawowe zachowanie
   2. stanowi bazę dla wszystkich dekoracji
3. Klasa `bazowa dekoratora` - **interfejs dla dekoratorów udostępniający kontekst komponentu**
   1. Zawiera referencję do opakowywanego obiektu
   2. Pośredniczy między klientem a opakowanym obiektem
4. Konkretni dekoratorzy - **klasa doorująca, dziedzicząca kontekst po `bazowa dekoratora`**
   1. Rozszerzają klasą bazowego dekoratora
   2. Dodają swoją funkcjonalność przed lub po wywołaniu metod opakowanego obiektu
   3. Implementują dodatkowe zachowania według potrzeb
   
**Opis zrozumiały**
1. Definicja interfejsu który będzie gwarantować że zaimplementujemy metody/pola które będziemy mogli później przykryć `dekoratorami`
2. Definicja `głównej klasy dekoratora`, która **będzie działać jako interfejs** dla wyspecjalizowanych dekoratorów oraz będzie przekazywać kontekst
   1. definiuje właściwość, która przyjmuje kontekst klasy do dekorowania 
   2. może przekazać klasę nie zmienioną
3. Definiowanie klasy `dekoratora`, która będzie dziedziczyć zachowanie klasy `głównej klasy dekoratora` dzięki czemu `dekorator` bedzie posiadać dostęp do kontekstu klasy która ma zostać udekorowana.
4. `Komponent` - to jest klasa która ma zostać udekorowana

Przykład interfejsu:

```ts
interface IAttack {
    attack(): void;
}
```
 `Komponent` - to jest klasa która ma zostać udekorowana
```ts
class Enemy implements IAttack {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    attack(): void {
        console.log(`Wróg ${this.name} wykonuje atak!`);
    }
}
```
Definicja `głównej klasy dekoratora`
```ts
class MakeAttack implements IAttack {
    protected wrap: IAttack;

    constructor(wrap: IAttack) {
        this.wrap = wrap;
    }

    attack() {
        return this.wrap.attack();
    }
}
```
Definiowanie klasy `dekoratora`
```ts
class MakeAxeAttack extends MakeAttack {
    attack(): void {
        this.wrap.attack();
        console.log("Atak siekierą");
    }
}
```

## Wzorzec Obserwator

Wzorzec pozwalający na zdefiniowanie mechanizmu obserwacji danego obiektu i reagowanie na jego mutacje

### Opis

Obiekt który posiada jakiś interesujący stan nazywa się **podmiotem** ale kiedy obiekt zacznie powiadamiać inne obiekty o zmianach swojego stanu zacznie się nazywać **publikującym**.
Wszystkie pozostałe obiekty które chcą śledzić zmiany stanu nazywa się **subskrybentami**

Wzorzec obserwator proponuje dodanie mechanizmu `subskrypcji` do klasy **publikującej** dzięki czemu pojedyncze obiekty będą mogły subskrybować lub przerywać subskrypcję zdarzeń obiektu **publikującego**.

Implementacja mechanizmu składa się z:

1. Pola tablicowego służącego przechowywaniu listy odniesień do subskrybentów.
2. Metody publiczne pozwalające na dodawanie i usuwanie wpisów tej listy.

