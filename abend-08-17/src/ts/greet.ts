
export class Greeter {
    private name: String;

    constructor(theName: string) {
        this.name = theName;
    }

    public sayHello() {
        console.log('Executing TS Script');
        console.log(`Hello from ${this.name}`);
    }
}

