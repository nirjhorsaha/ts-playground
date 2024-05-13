/**
 * Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does,
 * the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
 */

{
    class Cat {
        constructor(public name: string) {
            this.name = name;
        }
    }

    const isCat = (object: any): object is Cat => {
        return object instanceof Cat;
    }; 

    const checkIsCat = (object: any) => {
        if (isCat(object)) {
            console.log("Yes, it's a cat");
        } else {
            console.log("No, it's not a cat");
        }
    };

    const fluppy = new Cat("Fluppy");
    // checkIsCat(fluppy);

    const others = { type: 'dog' }
    // checkIsCat(others);
}
