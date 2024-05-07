{
    class Animal {
        eat() {
            console.log("The animal is eating");
        }
    }

    class Cat extends Animal {
        meow() {
            console.log("Meow Meow");
        }
    }

    class Dog extends Animal {
        bark() {
            console.log("Woof! Woof!");
        }
    }

    type AnimalType = Cat | Dog;

    const animalSound = (pet: AnimalType) => {
        if (pet instanceof Dog) {
            pet.bark();
        } else {
            pet.meow();
        }
    };


    const myCat = new Cat();
    animalSound(myCat);
}
