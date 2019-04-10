class Weapon {
    constructor(name,attack,durability,range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialDurability = 700;

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
        super(name,attack,durability,range);
        this.initialDurability = 700;
    };
};


const arm = new Arm("Рука",1,Infinity,1);
console.log (arm.name);
console.log (arm.durability);
arm.takeDamage(100);
console.log (arm.durability);
console.log (arm.getDamage());
console.log(arm.isBroken());

class Bow extends Weapon {
    constructor (name,attack,durability,range) {
        super(name,attack,durability,range);
        this.initialDurability = 700;
    };
};

const bow = new Bow("Лук",10,200,3);
console.log (arm.name);
console.log (arm.durability);
bow.takeDamage(100);
console.log (arm.durability);
console.log (arm.getDamage());
console.log(arm.isBroken());

class Sword extends Weapon {
    constructor (name,attack,durability,range) {
        super(name,attack,durability,range);
        this.initialDurability = 700;
    };
};

class Staff extends Weapon {
    constructor (name,attack,durability,range) {
        super(name,attack,durability,range);
        this.initialDurability = 700;
    };
};

const sword = new Sword("Меч",25,500,1);
console.log (sword.name);
console.log (sword.durability);
sword.takeDamage(600);
console.log (sword.durability);
console.log (sword.getDamage());
console.log(sword.isBroken());

class Longbow extends Bow {
    constructor () {
        super();
        this.name = "Длинный лук";
        this.attack = 15;
        this.durability = 200;
        this.range = 4;
        this.initialDurability = 700;
    };
};

const longbow = new Longbow();
console.log (longbow.name);
console.log (longbow.durability);
longbow.takeDamage(100);
console.log (longbow.durability);
console.log (longbow.getDamage());
console.log(longbow.isBroken());

class Ax extends Sword {
    constructor () {
        super();
        this.name = "Секира";
        this.attack = 27;
        this.durability = 800;
        this.range = 1;
        this.initialDurability = 1000;
    };
};

const ax = new Ax();
console.log (ax.name);
console.log (ax.durability);
ax.takeDamage(100);
console.log (ax.durability);
console.log (ax.getDamage());
console.log(ax.isBroken());

class StormStaff extends Staff {
    constructor () {
        super();
        this.name = "Посох бури";
        this.attack = 10;
        this.durability = 300;
        this.range = 3;
        this.initialDurability = 1000;
    };
};

const stormStaff = new StormStaff();
console.log (stormStaff.name);
console.log (stormStaff.durability);
stormStaff.takeDamage(400);
console.log (stormStaff.durability);
console.log (stormStaff.getDamage());
console.log(stormStaff.isBroken());
