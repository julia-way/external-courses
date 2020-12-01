class ElectricalAppliance {
    constructor(isSwitchedOn) {
        this.isSwitchedOn = isSwitchedOn;
    }
}
  
class Fridge extends ElectricalAppliance {
    constructor(isSwitchedOn, name, power) {
        super(isSwitchedOn);
        this.name = name;
        this.power = power;
    }
}

class MicrowaveOven extends ElectricalAppliance {
    constructor(isSwitchedOn, name, power) {
        super(isSwitchedOn);
        this.name = name;
        this.power = power;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(isSwitchedOn, name, power) {
        super(isSwitchedOn);
        this.name = name;
        this.power = power;
    }
}

class KitchenHood extends ElectricalAppliance {
    constructor(isSwitchedOn, name, power) {
        super(isSwitchedOn);
        this.name = name;
        this.power = power;
    }
}

class Room {
    constructor(...args) {
        this.appliances = [...args];
    }

    countTotalPower() {
        let totalPower = 0;
        
        this.appliances.forEach((elem) => {
            if (elem.isSwitchedOn === true) {
            totalPower += elem.power;
            }
        });

        return totalPower;
    }

    sortByName(value) {
        return this.appliances.filter(elem => elem.name === value);
    }
}

const fridgeIndesit = new Fridge(true, "Fridge", 1);
const ovenBosch = new MicrowaveOven(false, "Microwave Oven", 1);
const lampCree = new Lamp(true, "Lamp", 0.1);
const hoodBosch = new KitchenHood(false, "Kitchen Hood", 0.5);

const kitchen = new Room(fridgeIndesit, ovenBosch, lampCree, hoodBosch);
