var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = '';
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + 'My name is ' + this.firstName + '' + this.lastName);
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Marco', 'Solorio');
myHelloClassInstance.sayHello();
