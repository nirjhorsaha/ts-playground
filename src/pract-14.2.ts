{
    class Vehicle {
        constructor(
            public brand: string,
            public model: string,
            public year: number,
        ) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }

        displayInfo() {
            console.log(
                `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`,
            );
        }
    }

    class Car extends Vehicle {
        constructor(brand: string, model: string, year: number) {
            super(brand, model, year);
        }
    }

    class Bike extends Vehicle {
        public numberOfhelmet: number;

        constructor(
            brand: string,
            model: string,
            year: number,
            numberOfhelmet: number,
        ) {
            super(brand, model, year);
            this.numberOfhelmet = numberOfhelmet;
        }

        isStarting() {
            console.log(`bike is starting...`);
        }
    }

    const newCar = new Car("Toyota", "Corolla", 2022);
    const newBike = new Bike("Honda", "CBR500R", 2020, 2);

    console.log(newBike);
    newBike.isStarting();
}
