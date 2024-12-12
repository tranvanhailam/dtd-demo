class Car {
    constructor(name, color) {
        (this.name = name), (this.color = color);
    }
    getName = () => {
       return this.name = name;
    };
    getColor = () => {
        return this.color = color;
    };
}

const bmv = new Car("BMV", "Black");
console.log(bmv);
