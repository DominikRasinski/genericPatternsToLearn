"use strict";
class Enemy {
    name;
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`${this.name} wykonuje atak!`);
    }
}
// Klasa interfejs dla dekoratorow
class MakeAttack {
    wrap;
    constructor(wrap) {
        this.wrap = wrap;
    }
    attack() {
        return this.wrap.attack();
    }
}
// dekorator dekorujacy metode attack
class MakeAxeAttack extends MakeAttack {
    attack() {
        this.wrap.attack();
        console.log("Atak siekierą");
    }
}
class MakeSwordAttack extends MakeAttack {
    attack() {
        this.wrap.attack();
        console.log("Atak mieczem");
    }
}
const enemy = new Enemy("Goblin");
// Wrap the enemy with a sword attack decorator
const swordAttackEnemy = new MakeSwordAttack(enemy);
// Wrap the enemy with an axe attack decorator
const axeAttackEnemy = new MakeAxeAttack(enemy);
// Call the attack method on the decorated enemies
swordAttackEnemy.attack();
axeAttackEnemy.attack();
