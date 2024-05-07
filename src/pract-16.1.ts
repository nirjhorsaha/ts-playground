{
    class Person {
        constructor(
            public name: string,
            public age: number,
            private _phoneNo: string,
            protected address: string,
        ) {
            this.name = name;
            this.age = age;
            this._phoneNo = _phoneNo;
            this.address = address;
        }

        public intro(name : string) {
            console.log(`Hello my name is: ${name}`);
        }
    }

    const person1 = new Person('Saha Babu', 25, '01511223344', 'Dhaka');
    console.log(person1);

    person1.intro('Mr Saha');
}
