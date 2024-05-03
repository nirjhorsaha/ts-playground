{
    type Employee1 = {
        name: string;
        id: number | string;
    };

    type EmployeeWithRole1 = Employee1 & { role: string }
    type EmployeeWithRole1 = Employee1 & { role: string }

    const employee1 : EmployeeWithRole1 ={
        name: 'Rasel',
        id: 'em123',
        role: 'junior developer'
    }

    console.log(employee1?.role);

}