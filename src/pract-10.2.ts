{
    type Mobile = {
        brand: string;
        model: string;
        price: number;
    };

    type getMobile = "brand | model | price"; //manualy

    type getMobileUsingKey = keyof Mobile; // using key

    const newMobile: getMobileUsingKey = "brand";
}
