"use strict";
class Context {
    _strategy;
    constructor(strategy) {
        this._strategy = strategy;
    }
    setStrategy(strategy) {
        this._strategy = strategy;
    }
    executeStrategy(a, b) {
        return this._strategy.execute(a, b);
    }
}
class StrategyAdd {
    execute(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a + b);
        }
    }
}
class StrategySubtract {
    execute(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a - b);
        }
    }
}
class App {
    context;
    firstNumber;
    secondNumber;
    strategyType;
    constructor(firstNumber, secondNumber, strategyType) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.strategyType = strategyType;
        // inicjalizacja kontekstu z poprawną strategią
        if (this.strategyType === "add") {
            this.context = new Context(new StrategyAdd());
        }
        else {
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
