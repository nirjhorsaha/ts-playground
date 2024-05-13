/**
 * Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string,
 * return its length. If it's a number, return the square of that number.
 */

{
    const checkUnionType = (input: string | number):number => { 
        if (typeof input === 'string') {
            return input.length;
        } else if (typeof input === 'number') {
         return input * input
        } else {
            throw new Error('Invalid union type');
        }
    }

    // console.log(checkUnionType('input'));
    // console.log(checkUnionType(7));
}
