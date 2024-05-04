{
  const newEmpoyee = <
    T extends {
      name: string;
      salary: number;
      designation: string;
    }
  >(
    employee: T
  ) => {
    const department = "Software Engineering";
    return {
      ...employee,
      department,
    };
  };

  const employee1 = newEmpoyee({
    name: "Alice",
    salary: 35000,
    designation: "Project Manager",
    age: 32,
  });

  const employee2 = newEmpoyee({
    name: "Bob",
    salary: 25000,
    designation: "Junior Developer",
  });
    
    console.log(employee1);
}
