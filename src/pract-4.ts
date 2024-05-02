// const employee1: {
//     name: string;
//     id: number;
//     designation: string;
//     bloodGroup?: string;
// } = {
//     name: 'Mehedi',
//     id : 1111,
//     designation: 'Jr Software Engineer'
// }

// const employee2: {
//     name: string;
//     id: number;
//     designation: string;
//     bloodGroup?: string;
// } = {
//     name: 'Rabbi',
//     id : 1111,
//     designation: 'Jr Software Engineer',
//     bloodGroup: 'A+ ve'
// }


{
    type Employee = {
        name: string;
        id: number;
        designation: string;
        bloodGroup?: string;
    }

    const employee1: Employee = {
        name: 'Mr.  Mehedi',
        id: 1111,
        designation: 'Jr Software Engineer'
    }

    const employee2: Employee = {
        name: 'Mr. Rabbi',
        id: 2222,
        designation: 'Software Engineer',
        bloodGroup: 'A+ ve'
    }

    const employee3: Employee = {
        name: 'Mr. Rasel',
        id: 3333,
        designation: 'Sr Software Engineer',
    }

    console.log(employee2?.designation);
    console.log(employee3?.id);
}
