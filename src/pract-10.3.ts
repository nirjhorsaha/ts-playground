{
    const getObjValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const employee = {
        name: "Mr Paul",
        age: 36,
    };

    const mobile = {
        brand: "Apple",
        model: "iphone 13",
        color: "black",
    };

    const result = getObjValue(mobile, "model");
    console.log(result);
}
