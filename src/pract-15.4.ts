{
    class Vehicle {
        move() {
            console.log('Vehicle is moving');
        }
    }

    class Car extends Vehicle { 
        honk() {
            console.log('Beep! Beep!')
        }
    }

    class Bicycle extends Vehicle { 
        ringBell() {
            console.log('Ring Ring!!')
        }
    }

    type Vehicletype = Car | Bicycle;

    const isCar = (vehicle: Vehicletype): vehicle is Car => {
        return vehicle instanceof Car;
    }

    // const isBicycle = (vehicle: Vehicletype): vehicle is Bicycle => {
    //     return vehicle instanceof Bicycle;
    // }

    const operateVehicle = (vehicle: Vehicletype) => {
        if (isCar(vehicle)) {
            vehicle.honk();
        } else {
            vehicle.ringBell();
        }
    }

    const myCar = new Car();
    operateVehicle(myCar);
    
    // const myBicycle = new Bicycle();
    // operateVehicle(myBicycle);

}