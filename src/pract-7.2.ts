{
    type GenericArray<T> = Array<T>;

    interface User {
        name: string;
        isMarried: boolean;
    }

    const users: GenericArray<User> = [
        {
            name: "Mr Rasel",
            isMarried: true,
        },
        {
            name: "Mr Rabbi",
            isMarried: true,
        },
    ];

    console.log(users);
}
