/**
 * Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and
 * licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the
 * combined properties of both types.
 */

{
    interface Car {
        make: string;
        model: string;
        year: number;
    }

    interface Driver {
        name: string;
        licenseNumber: string;
    }

    type combinedObject = Car | Driver;

    const CarAndDriver = (car: Car, driver: Driver): combinedObject => {
        return { ...car, ...driver };
    };

    const myCar: Car = {
        make: "Toyota",
        model: "Corolla",
        year: 2000,
    };

    const myDriver: Driver = {
        name: "Mr Ying",
        licenseNumber: "AXH679000"
    }


    const combinedProperties = CarAndDriver(myCar, myDriver);
    console.log(combinedProperties)
}
