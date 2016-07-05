@hiDecorator
class ClassToDecorate {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
	
    greet() {
        return "Hello, " + this.greeting;
    }
}

function hiDecorator(constructorToDecorate: Function): Function{
	// save a reference to the original constructor
  	var original = constructorToDecorate;

  	// a utility function to generate instances of a class
  	function construct(constructor, args) {
		var decoratedClass : any = function () {
			return constructor.apply(this, args);
		}
		decoratedClass.prototype = constructorToDecorate.prototype;
		return new decoratedClass();
	}

	// the new constructor behaviour
	var replacedConstructor : any = function (...args) {
		return construct(original, ['hi']);
	}
	
	// copy prototype so intanceof operator still works
	replacedConstructor.prototype = original.prototype;

	// return new constructor (will override original)
	return replacedConstructor;
}

var decorated = new ClassToDecorate('I will be replaced');
console.log(decorated.greet());