{
    type processvalue = string | number | boolean;

    const checkProcessValue = (value: processvalue): processvalue => {
        if (typeof value === "string") {
            return `Given ${value} is string`;
        } else if (typeof value === "number") {
            return ` Given ${value} is number`;
        } else {
            return "Unknown type";
        }
    };
    const checkValue = checkProcessValue("hello developers");
    console.log(checkValue);
}
