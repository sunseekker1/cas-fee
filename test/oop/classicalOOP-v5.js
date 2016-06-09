
;(function(ch) {

    ;(function(hsr) {

        /*class*/ hsr.House = (function() {

            function constr(numHeight, numWidth) {
                // no super call needed

                if (!(this instanceof hsr.House)) { // ensure this pointer
                    return new hsr.House(numHeight, numWidth);
                }

                /*private*/ var self = this;
                /*private*/ var height = Number(numHeight);
                /*private*/ var width = Number(numWidth);

                /*private*/ function internalWidth() {
                    return width;
                }

                /*public virtual*/ Object.defineProperty(self, "height", {
                    value: height, // property returns value
                    configurable: true
                } );

                /*public sealed*/ Object.defineProperty(self, "width", {
                    get: internalWidth // property value is evaluated by calling "internalWidth"
                } );
            };

            return constr;
        })();

        //House.prototype = new Object(); -> not needed
        //House.prototype.constructor = House;  -> not needed



        /*class*/ hsr.HighRise = (function(base) {

            function constr(numHeight, numWidth) {
                base.call(this, numHeight, numWidth); /* base(numHeight, numWidth) */

                if (!(this instanceof hsr.HighRise)) { // ensure this pointer
                    return new hsr.HighRise(numHeight, numWidth);
                }

                /*private*/ var self = this;
                /*private*/ var groundHeightFactor = 1.1;
                /*private*/ var base_Height = self.height; // copy this.height before overwriting it

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
            };

            // ----- prototype extensions -----
            constr.prototype = new base(0, 0); /* HighRise (constr) implements House (base) */
            constr.prototype.constructor = constr;

            return constr;
        })(hsr.House);

    })(ch.hsr = ch.hsr || { } );

})(global.ch = global.ch || { } );


var myHouse = new ch.hsr.House(10, 20);
console.log(myHouse.constructor === ch.hsr.House);
console.log(myHouse instanceof ch.hsr.House);
console.log(myHouse instanceof Object);
console.log(myHouse.height === 10);
console.log(myHouse.width === 20);

var myHighRise = new ch.hsr.HighRise(10, 20);
console.log(myHighRise.constructor === ch.hsr.HighRise);
console.log(myHighRise instanceof ch.hsr.HighRise);
console.log(myHighRise instanceof ch.hsr.House);
console.log(myHighRise instanceof Object);
console.log(myHighRise.height === 11);
console.log(myHighRise.calcArea() === 220);

var myHighRise = new ch.hsr.HighRise(40, 20);
console.log(myHighRise.constructor === ch.hsr.HighRise);
console.log(myHighRise instanceof ch.hsr.HighRise);
console.log(myHighRise instanceof ch.hsr.House);
console.log(myHighRise instanceof Object);
console.log(myHighRise.height === 44);
console.log(myHighRise.calcArea() === 880);

