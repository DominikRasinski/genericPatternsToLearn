"use strict";
class EnemyBase {
    movement = null;
    attack(vector) {
        if (this.movement) {
            this.movement.execute(vector);
        }
        console.log("Przeciwnik atakuje");
    }
    setMovement(movement) {
        this.movement = movement;
    }
}
class Movement {
    execute(vector) {
        this.moveTo(vector);
    }
    moveTo(vector) {
        console.log(`Przechodze do pozycji x ${vector[0]} i y ${vector[1]}`);
    }
}
const enemyOne = new EnemyBase;
const movement = new Movement;
enemyOne.setMovement(movement);
enemyOne.attack([30, 21]);
