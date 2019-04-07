class Weapon {
    constructor(name,attack,durability,range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability =  this.durability - damage;
        
        if (this.durability < 0) {
            this.durability = 0;
        }
    }
/*
    getDamage() {
        if (durability >= this.durability * 0.3) {
            return this.attack;
        }
        else {
            return this.attack / 2;
        }
    }
*/
    isBroken() {

       if (this.durability > 0) {
           return false;
       } else {
           return true;
       }

    }
}



const sword = new Weapon ("Старый меч",25,500,1);

console.log(sword.durability);

sword.takeDamage(600);

console.log(sword.durability);

console.log(sword.isBroken());

const hand = new Weapon ("Рука",1,Infinity,1);

hand.takeDamage(100);

console.log(hand.durability);

console.log(hand.isBroken());

const onion = new Weapon ("Лук",10,200,3);
const knife = new Weapon ("Нож",5,300,1);
const staff = new Weapon ("Посох",8,300,2);

const longBow = new Weapon("Длинный лук",15,200,4);
const axe = new Weapon ("Секира",27,800,1);

  