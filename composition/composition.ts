interface Component {
    execute(...args: any[]): void;
}

class EnemyBase {
    private movement: Component | null = null

    attack(vector: [number, number]) {
        if (this.movement) {
            this.movement.execute(vector)
        }
        console.log("Przeciwnik atakuje");
    }

    setMovement(movement: Component) {
        this.movement = movement;
    }
}

class Movement implements Component {
    execute(vector: [number, number]): void {
        this.moveTo(vector)
    }

    moveTo(vector: [number, number]): void {
        console.log(`Przechodze do pozycji x ${vector[0]} i y ${vector[1]}`)
    }
}

const enemyOne = new EnemyBase;
const movement = new Movement;

enemyOne.setMovement(movement);
enemyOne.attack([30,21]);