{
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const simpleArrayWithGeneric = createArrayWithGeneric<string>("Bangladesh");
    console.log(simpleArrayWithGeneric);

    type Student = {
        name: string;
        id: number | string;
    };

    const simpleObjectWithGeneric = createArrayWithGeneric<Student>({
        name: "Mr Student",
        id: 12207,
    });
}
