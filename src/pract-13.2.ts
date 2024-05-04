{
    // type DevSalaryAndExperience = {
    //     frontend: number;
    //     backend: number;
    // };

    type DevSalaryAndExperience<T> = {
        [key in keyof T]: T[key];
    };

    const salary: DevSalaryAndExperience<{ frontend: string; backend: number }> = {
        frontend: "5 years",
        backend: 45000,
    };
}
