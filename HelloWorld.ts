class HelloWorld {

    firstName = '';
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + '' + this.lastName)
    }

}

const myHelloClassInstance = new HelloWorld(' Marco ', ' Solorio ');
myHelloClassInstance.sayHello();