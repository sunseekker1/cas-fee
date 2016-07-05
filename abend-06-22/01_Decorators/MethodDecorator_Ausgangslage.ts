class MethodDecoratorClass {
    // TODO use method decorator
    foo(n: number) {
        return n * 2;
    }
}

function log(target: Function, key: string, descriptor: any) {
    // target === C.prototype
    // key === "foo"
    // value === Object.getOwnPropertyDescriptor(C.prototype, "foo")
    return {
        value: function (...args: any[]) {

	 // assign the original function
			let originalFunction = descriptor.value;

            // convert list of foo arguments to string
            let a = args.map(a => JSON.stringify(a)).join();

            // TODO invoke foo() and get its return value            

            // TODO convert result to string		            

            // display in console the function call details
            console.log(`Call: ${key}(${a}) => ${r}`);

            // return the result of invoking foo
            return result;
        }
    };
}

let decorated = new MethodDecoratorClass();
decorated.foo(12);
