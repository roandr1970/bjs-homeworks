class Weapon {
    constructor(name,attack,durability,range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialDurability = 1000;

    }

    takeDamage(damage) {
        this.durability =  this.durability - damage;
        
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability >= this.initialDurability * 0.3) {
            return this.attack;
        }
        else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        return (this.durability > 0) ? false : true;
    }
}

const oldSword = new Weapon ("Старый меч",25,500,1);

console.log(oldSword.durability);

oldSword.takeDamage(400);

console.log(oldSword.durability);

console.log (oldSword.getDamage());

console.log(oldSword.isBroken());

const hand = new Weapon ("Рука",1,Infinity,1);

console.log(hand.durability);

hand.takeDamage(100);

console.log(hand.durability);

console.log (hand.getDamage());

console.log(hand.isBroken());


//Задание 2
class Arm extends Weapon {
    constructor (name,attack,durability,range) {
        super();
        this.option = {
        name: "Рука",
        attack: 1,
        durability: Infinity,
        range: 1,
        initialDurability: 1000
        };
    };
};

const arm = new Arm();
console.log (arm.option.name);


class Bow extends Weapon {
    constructor (name,attack,durability,range) {
        super();
        this.option = {
        name: "Лук",
        attack: 10,
        durability: 200,
        range: 3,
        initialDurability: 1000
        };
    };
};

const bow = new Bow();
console.log (bow.option.name);
console.log (bow.option.durability);

class Sword extends Weapon {
    constructor (name,attack,durability,range) {
        super();
        this.option = {
        name: "Меч",
        attack: 25,
        durability: 500,
        range: 1,
        initialDurability: 700
        };
    };
};

const sword = new Sword();

console.log(sword.option.durability);

sword.takeDamage(600);

console.log(sword.option.durability);

console.log (sword.getDamage());

console.log(sword.isBroken());

