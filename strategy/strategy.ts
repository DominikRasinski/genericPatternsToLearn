interface IStrategy {
    execute<T>(a: T, b: T): void;
}

class Context {
    private _strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this._strategy = strategy;
    }

    setStrategy(strategy: IStrategy) {
        this._strategy = strategy;
    }

    executeStrategy<T>(a: T, b: T) {
        return this._strategy.execute(a, b);
    }
}

class StrategyAdd implements IStrategy {
    execute<T>(a: T, b: T): void {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a + b);
        }
    }
}

class StrategySubtract implements IStrategy {
    execute<T>(a: T, b: T): void {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a - b);
        }
    }
}

class App {
    private context: Context;
    firstNumber: number;
    secondNumber: number;
    strategyType: "add" | "subtract";

    constructor(firstNumber: number, secondNumber: number, strategyType: "add" | "subtract") {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.strategyType = strategyType;

        // inicjalizacja kontekstu z poprawną strategią
        if (this.strategyType === "add") {
            this.context = new Context(new StrategyAdd());
        } else {
            this.context = new Context(new StrategySubtract());
        }
    }

    main() {
        this.context.executeStrategy(this.firstNumber, this.secondNumber);
    }
}

// Przykładowe użycie
const app = new App(5, 3, "add");
app.main(); // 8

const app2 = new App(5, 3, "subtract");
app2.main(); // 2