/**
 * Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use
 * generics to make the function work with arrays of any data type. Inside the function, find and return the index of
 * the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that.
 *
 * Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for
 * each of them to display the results.
 */

{
    const findFirstOccurrence = <T>(array: T[], value: T): number | string => {
        const index = array.indexOf(value);
        return index != -1 ? index : -1;
    };

    const numbersArray = [1, 2, 3, 4, 5];
    // console.log(
    //     "Index of 3 in numbersArray:",
    //     findFirstOccurrence(numbersArray, 3),
    // );

    const stringsArray = ["apple", "banana", "cherry"];
    // console.log(
    //     "Index of 'banana' in stringsArray:",
    //     findFirstOccurrence(stringsArray, "banana"),
    // );
    
    const mixedArray = ["One", 3, "Five", 7, "Nine"];
    console.log(
        "Index of 'ten' in mixedArray",
        findFirstOccurrence(mixedArray, "ten"),
    );
}
