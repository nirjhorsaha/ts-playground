{
    type TypeExample = number[];

    interface InterfaceExample {
        [index: number]: number;
    }

    const example1: TypeExample = [1, 2, 3];
    const example2: InterfaceExample = [4, 5, 6];

    console.log({ example1 });
    console.log({ example2 });
}
