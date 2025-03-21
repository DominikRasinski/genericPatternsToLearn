interface IAttack {
    attack(): void;
}

class Enemy implements IAttack {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    attack(): void {
        console.log(`Wróg ${this.name} wykonuje atak!`);
    }
}

// Klasa interfejs dla dekoratorow
class MakeAttack implements IAttack {
    protected wrap: IAttack;

    constructor(wrap: IAttack) {
        this.wrap = wrap;
    }

    attack() {
        return this.wrap.attack();
    }
}

// dekorator dekorujacy metode attack
class MakeAxeAttack extends MakeAttack {
    attack(): void {
        this.wrap.attack();
        console.log("Atak siekierą");
    }
}

class MakeSwordAttack extends MakeAttack {
    attack(): void {
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