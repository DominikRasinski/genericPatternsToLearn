var Context = /** @class */ (function () {
    function Context(strategy) {
        this._strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this._strategy = strategy;
    };
    Context.prototype.executeStrategy = function (a, b) {
        return this._strategy.execute(a, b);
    };
    return Context;
}());
var StrategyAdd = /** @class */ (function () {
    function StrategyAdd() {
    }
    StrategyAdd.prototype.execute = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a + b);
        }
    };
    return StrategyAdd;
}());
var StrategySubtract = /** @class */ (function () {
    function StrategySubtract() {
    }
    StrategySubtract.prototype.execute = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a - b);
        }
    };
    return StrategySubtract;
}());
var App = /** @class */ (function () {
    function App(firstNumber, secondNumber, strategyType) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.strategyType = strategyType;
        // Initialize context with the appropriate strategy
        if (this.strategyType === "add") {
            this.context = new Context(new StrategyAdd());
        }
        else {
            this.context = new Context(new StrategySubtract());
        }
    }
    App.prototype.main = function () {
        this.context.executeStrategy(this.firstNumber, this.secondNumber);
    };
    return App;
}());
// Example usage
var app = new App(5, 3, "add");
app.main(); // Output: 8
var app2 = new App(5, 3, "subtract");
app2.main(); // Output: 2
