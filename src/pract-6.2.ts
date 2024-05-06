{
    interface Employee2 {
        name: string;
        id: number | string;
    }

    interface EmployeeWithRole2 extends Employee2 {
        role: string;
    }

    const employee2: EmployeeWithRole2 = {
        name: "Rabbi",
        id: "em456",
        role: "developer",
    };

    console.log(employee2?.id);
}
