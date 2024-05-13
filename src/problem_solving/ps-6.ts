/**
 * Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the
 * parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error
 * message.
 */

{
    const sumArrayOfNumbers = (input: unknown): number | void => {
        if (Array.isArray(input)) {
            if (input.every((n: number) => typeof n === "number")) {
                const sum = input.reduce((total, num) => total + num, 0);
                console.log("Sum of numbers: ", sum);
            } else {
                console.error("Not all elements in array are numbers!");
            }
        } else {
            console.error("Input is not an array");
        }
    };

    sumArrayOfNumbers([1, 2, 3, 4]);
    sumArrayOfNumbers(['one', 'two', 'three']);
    sumArrayOfNumbers(123)
}
