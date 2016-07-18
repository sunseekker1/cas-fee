;(function(ch) {

    ;(function(hsr) {

        /*class*/
        hsr.Person = (function() {

            function constr(name) {
                // no super call needed

                // ensure this pointer
                if (!(this instanceof hsr.Person)) {
                    return new hsr.Person(name);
                }

                /*private*/
                var self = this;
                var name = name;

                /*public override sealed*/ Object.defineProperty(self, "height", {
                    get: function() { // property value is evaluated by calling a function
                        return groundHeightFactor * base_Height;
                    }
                } );

                /*public sealed*/ Object.defineProperty(self, "calcArea", {
                    value: function() { // property returns function; results in a method
                        return self.height /* public property accessor */
                            * self.width; /* public property accessor */
                    }
                } );

                /*public virtual*/
                Object.defineProperty(self, "name", {
                    value: name, // property returns value
                    configurable: true
                } );
            };

            return constr;
        })();

        //House.prototype = new Object(); -> not needed
        //House.prototype.constructor = House;  -> not needed



        /*class*/
        hsr.Musician = (function(base) {

            function constr(name, instrument, age) {
                base.call(this, name);

                if (!(this instanceof hsr.Musician)) { // ensure this pointer
                    return new hsr.Musician(name, instrument, age);
                }

                /*private*/
                var self = this;
                var age = age;
                var instrument = instrument;

                /*public override sealed*/
                Object.defineProperty(self, "instrument", {
                    get: function() { // property value is evaluated by calling a function
                        return instrument;
                    }
                } );


                /*public sealed*/
                Object.defineProperty(self, "shoutName", {
                    value: function() { // property returns function; results in a method
                        return self.instrument /* public property accessor */;
                    }
                } );

                /*public sealed*/
                Object.defineProperty(self, "getAge", {
                    value: function() { // property returns function; results in a method
                        return self.age /* public property accessor */;
                    }
                } );

                /*public sealed*/
                Object.defineProperty(self, "getInstrument", {
                    value: function() { // property returns function; results in a method
                        return self.instrument /* public property accessor */;
                    }
                } );
            };

            // ----- prototype extensions -----
            constr.prototype = new base(0, 0); /* HighRise (constr) implements House (base) */
            constr.prototype.constructor = constr;

            return constr;
        })(hsr.Person);

    })(ch.hsr = ch.hsr || { } );

})(global.ch = global.ch || { } );


// create intances
var john = new ch.hsr.Person("John Person");
var bobby = new ch.hsr.Person("Bobby Person");
var luke = new ch.hsr.Musician("Luke Musician", "Guitar", 39);

// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();
