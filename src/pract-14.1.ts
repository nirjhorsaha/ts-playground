{
    class Developer {
        name: string; yearsOfExperience: number; skills: string[];
        
        constructor(name: string, yearsOfExperience: number, skills: string[]) {
            this.name = name;
            this.yearsOfExperience = yearsOfExperience;
            this.skills = skills;
        }

        introduce() {
            console.log(`Hello my name is ${this.name}`);
        }
    }


    const AliceTheDeveloper = new Developer('Alice', 5, ['Typescript', 'AWS']);
    console.log(AliceTheDeveloper);

    AliceTheDeveloper.introduce();
}

