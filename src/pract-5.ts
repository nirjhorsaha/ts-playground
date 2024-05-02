{
    type Employee = {
        name: string;
        id: number;
        designation: string;
        bloodGroup?: string;
        address:{
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const employee1: Employee = {
        name: 'Mr.  Mehedi',
        id: 1111,
        designation: 'Jr Software Engineer',
        address:
        {
            presentAddress: 'Gopalgonj'
        }
    }

    const employee2: Employee = {
        name: 'Mr. Rabbi',
        id: 2222,
        designation: 'Software Engineer',
        bloodGroup: 'A+ ve',
        address:
        {
            presentAddress: 'Dhaka',
            permanentAddress: 'Gopalgonj'
        }
    }

    const presentAddress=employee1?.id;
    const permanentAddress= employee2?.address?.permanentAddress?? 'No permanent address';
    console.log({presentAddress});
    console.log({permanentAddress});
}