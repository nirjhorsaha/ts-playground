{
    type GenericArray<T> = Array<T>;

    // const empId: number[] = [111,222,333]
    const empId: GenericArray<number> = [111, 222, 333];

    // const employees: string[] =['John', 'Smith', 'Doe'];
    const employees: GenericArray<string> = ["John", "Smith", "Doe"];

    // const isPermanentEmploy: boolean[] = [true, false, true];
    const isPermanentEmploy: GenericArray<boolean> = [true, true, false];

    // console.log(isPermanentEmploy);
}
