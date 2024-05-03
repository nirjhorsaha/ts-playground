{
    interface Company<T> {
        name: string;
        totalEmployee: number;
        employee: {
            name: string;
            age: number;
            position: string;
        }
        location?: T;
    }

    type CompanyLocation = {
        city: string;
        country: string;
    }

    const companyOne: Company<CompanyLocation> = {
        name: 'AB Corporation',
        totalEmployee: 270,
        employee: {
            name: 'Mr Jackson',
            age: 36,
            position: 'Project Manager',
        }
    }

    const companyTwo: Company<CompanyLocation> = {
        name: 'Tech Innovations Inc.',
        totalEmployee: 590,
        employee: {
            name: 'Mr Harshal',
            age: 42,
            position: 'Sr Software Engineer'
        },
        location: {
            city: "San Francisco",
            country: "USA"
        }

    }
}