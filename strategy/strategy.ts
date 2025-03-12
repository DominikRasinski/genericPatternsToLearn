interface IStrategy {
    execute<T>(a: T, b: T): void,
}

class Context {
    private _strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this._strategy = strategy;
    }

    set setStrategy(strategy: IStrategy) {
        this._strategy = strategy;
    }

    executeStrategy<T>(a: T, b: T) {
        return this._strategy.execute(a,b);
    }

}

class StrategyAdd implements IStrategy {
    execute<T>(a: T, b: T): void {
        if(typeof a == "number" && typeof b == "number") {
           console.log(a + b);
        }
    }
}

class StrategySubtract implements IStrategy {
    execute<T>(a: T, b: T): void {
        if(typeof a == "number" && typeof b == "number") {
            console.log(a - b);
        }
    }
}