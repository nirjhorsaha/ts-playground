{
    type GenericTuple<X, Y> = [X, Y];

    const couple: GenericTuple<string, string> = ["Mr NS", "Ms CP"];

    const StudentWithDept: GenericTuple<string, { name: string; id: string }> =
        [
            "CSE",
            {
                name: "Niloy",
                id: "CS191770",
            },
        ];
}
