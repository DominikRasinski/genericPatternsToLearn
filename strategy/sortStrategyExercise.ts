/**
* Cel zadania: Zaimplementuj wzorzec strategii, który pozwoli na dynamiczną zmianę algorytmu używanego przez obiekt w trakcie działania programu.
* Przykład zastosowania: Załóżmy, że masz aplikację do sortowania danych. Możesz mieć różne algorytmy sortowania (np. sortowanie bąbelkowe, sortowanie szybkiego sortowania, sortowanie przez wstawianie) i chcesz, aby użytkownik mógł wybrać, który algorytm ma być użyty.
* Wymagania:
Zdefiniuj interfejs SortStrategy z metodą sort(data: number[]): number[].
Zaimplementuj trzy różne strategie sortowania: BubbleSort, QuickSort, InsertionSort, które będą implementować interfejs SortStrategy.
Stwórz klasę Sorter, która będzie zawierała referencję do obiektu implementującego SortStrategy oraz metodę setStrategy(strategy: SortStrategy), która pozwoli na zmianę strategii w trakcie działania programu.
Klasa Sorter powinna również mieć metodę sort(data: number[]): number[], która będzie korzystać z aktualnie ustawionej strategii do sortowania danych.
 */

interface ISortStrategy {
    sort(data: number[]): number[];
}

class SortContext {
    private strategy: ISortStrategy;

    constructor(strategy: ISortStrategy) {
        this.strategy = strategy
    }

    public setStrategy(strategy: ISortStrategy) {
        this.strategy = strategy;
    }

    public runAlgorytm(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

class InsertionSort implements ISortStrategy {
    sort(data: number[]): number[] {
        let temp = 0;
        for(let i = 0; i < data.length; i++) {
            for(let j = i + 1; j <= data.length; j++) {
                if(data[i] > data[j]) {
                    temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
            }
        }       
        return data;
    }
}

class BobbleSort implements ISortStrategy {
    sort(data: number[]): number[] {
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < (data.length - i - 1); j++) {
                if(data[j] > data[j + 1]) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
        return data;
    }
}


class QuickSort implements ISortStrategy {
    sort(data: number[]): number[] {
        this.quickSort(data, 0, data.length - 1);
        return data;
    }

    partition(data: number[], low: number, high: number) {
        let pivot = data[high];
        let i = low - 1;

        for(let j = low; j <= high - 1; j++) {
            if(data[j] < pivot) {
                i++;
                [data[i], data[j]] = [data[j], data[i]];
            }
        }
        [data[i + 1], data[high]] = [data[high], data[i + 1]];
        return i + 1;
    }

    quickSort(data: number[], low: number, high: number) {
        if(low >= high) return data;
        let pi = this.partition(data, low, high);

        this.quickSort(data, low, pi - 1);
        this.quickSort(data, pi + 1, high);
    }
}

const data = [5, 3, 8, 4, 2, -1];

const sorter = new SortContext(new InsertionSort());
const startInsertSort = new Date().getTime();
console.log(sorter.runAlgorytm(data));
console.log(`Czas trwania: ${new Date().getTime() - startInsertSort}`);

sorter.setStrategy(new BobbleSort());
const startBobble = new Date().getTime();
console.log(sorter.runAlgorytm(data));
console.log(`Czas trwania: ${new Date().getTime() - startBobble}`);

sorter.setStrategy(new QuickSort());
const startQuickSort = new Date().getTime();
console.log(sorter.runAlgorytm(data));
console.log(`Czas trwania: ${new Date().getTime() - startQuickSort}`);
