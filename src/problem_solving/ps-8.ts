/**
 * Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like
 * name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart.
 * The function should take an array of Product objects as input and return the total cost.
 */

{
    interface Product {
        name: string;
        price: number;
        quantity: number;
    }

    const calculatesTotalCost = (products: Product[]): number => {
        let totalCost = 0;
        for (const product of products) {
            totalCost += product.price * product.quantity;
        }
        return totalCost;
    };

    const cart: Product[] = [
        {
            name: "Facewash",
            price: 30,
            quantity: 2,
        },
        {
            name: "Shampoo",
            price: 10,
            quantity: 1,
        },
        {
            name: "Hair musk",
            price: 20,
            quantity: 2,
        },
    ];

    const totalCost = calculatesTotalCost(cart);
    console.log("Total cost: ", totalCost);
}
