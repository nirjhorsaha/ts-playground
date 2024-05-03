{
    interface Developer<T, X = null> {
        name: string;
        skills: T;
        experienceInYears: number;
        githubUsername?: string;
        projects?: X;
    }

    interface programmingSkills {
        frontEnd: string;
        backEnd: string;
    }

    interface projects {
        frontend: string;
        backend: string;
    }

    const developer1: Developer<programmingSkills, projects> = {
        name: 'Alice Smith',
        skills: {
            frontEnd: 'TypeScript',
            backEnd: 'Postgresql',
        },
        experienceInYears: 5,
        projects: {
            frontend: 'TypeScript Project',
            backend: 'Postgresql Project'
        }
    }


    const developer2: Developer<programmingSkills> = {
        name: 'Bob Smith',
        skills: {
            frontEnd: 'React',
            backEnd:'Mongodb'
        },
        experienceInYears: 3,
        githubUsername: 'bobTheboss'
    }
}