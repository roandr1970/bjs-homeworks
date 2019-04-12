class Weapon {
    constructor(name,attack,durability,range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialDurability = durability;

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
    constructor () {
        super();
        this.name = "Рука";
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
        
    };
};


let arm = new Arm();
console.log (arm.name);
console.log (arm.durability);
arm.takeDamage(100);
console.log (arm.durability);
console.log (arm.getDamage());
console.log(arm.isBroken());

class Bow extends Weapon {
    constructor () {
        super();
        this.name = "Лук";
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    };
};

const bow = new Bow();
console.log (bow.name);
console.log (bow.durability);
bow.takeDamage(100);
console.log (bow.durability);
console.log (bow.getDamage());
console.log(bow.isBroken());

class Sword extends Weapon {
    constructor () {
        super();
        this.name = "Меч";
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    };
};

class Staff extends Weapon {
    constructor () {
        super();
        this.name = "Посох";
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }
};

const sword = new Sword();
console.log (sword.name);
console.log (sword.durability);
sword.takeDamage(600);
console.log (sword.durability);
console.log (sword.getDamage());
console.log(sword.isBroken());

class LongBow extends Bow {
    constructor (durability) {
        super();
        this.name = "Длинный лук";
        this.attack = 15;
        this.range = 4;
    };
};

const longBow = new LongBow();
console.log (longBow.name);
console.log (longBow.durability);
longBow.takeDamage(100);
console.log (longBow.durability);
console.log (longBow.getDamage());
console.log(longBow.isBroken());

class Axe extends Sword {
    constructor (range) {
        super();
        this.name = "Секира";
        this.attack = 27;
        this.durability = 800;
    };
};

const axe = new Axe();
console.log (axe.name);
console.log (axe.durability);
axe.takeDamage(100);
console.log (axe.durability);
console.log (axe.getDamage());
console.log(axe.isBroken());

class StormStaff extends Staff {
    constructor (durability) {
        super();
        this.name = "Посох бури";
        this.attack = 10;
        this.range = 3;
    };
};

const stormStaff = new StormStaff();
console.log (stormStaff.name);
console.log (stormStaff.durability);
stormStaff.takeDamage(400);
console.log (stormStaff.durability);
console.log (stormStaff.getDamage());
console.log(stormStaff.isBroken());