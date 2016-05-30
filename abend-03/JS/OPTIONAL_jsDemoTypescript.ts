/**
 * Created by mstolze on 16/05/16.
 */

var ARRAY1 = [1, 'hallo', true, [2, 4, 7], function() {return 'kkk'},
    {name: 'm'}];
//also global var -- does not work in TS
//window.ARRY2 = [3, 4, 5];

var ARRY2 = [3, 4, 5];

var G3 = ARRAY1.forEach(function(item) {console.log(item)}); // directly executed

var G4 = "Hallo";

function fun1 (par1) {
    var a3 = [1, 2, 3];
    console.log(a3, par1)
}
fun1(G3);

function printIndexable1 (indexable) {
    for (var i=0; i<indexable.length; i++) {
        console.log(indexable[i]);
    }
}
printIndexable1(ARRAY1);
printIndexable1(G4);
printIndexable1(5);

function lexicalScopeDemo1 (par1) {
    console.log("entered lexicalScopeDemo1");
    var localVar1 = 1;
    var localVar2 = 1;
    console.log(par1, localVar1);
    lexicalScopeDemo2(2);
}
function lexicalScopeDemo2 (par1) {
    console.log("entered lexicalScopeDemo2");
    var localVar1 = 2;
    console.log(par1, localVar1);
    // followng line error if uncommented; in TS already visible at edit-time
    console.log(localVar2);
}
lexicalScopeDemo1(1);

function keepConstantValClosureDemo(constant){
    return function() {return constant};
}
var CONSTANT5 = keepConstantValClosureDemo(5);
console.log("CONSTANT5()=", CONSTANT5());

var OBJ1 = {name:  'markus', age: 53, incAge: function () {this.age+=1} };
console.log("OBJ1=", OBJ1);
OBJ1.incAge();
console.log("OBJ1=", OBJ1);
// the following statment ceates an Error in TS
OBJ1.nnname="Peter";
//OBJ1.name="Peter";

console.log("OBJ1=", OBJ1);
//the following statement creates an error in TS
OBJ1.age="55";
//OBJ1.age=55;
console.log("OBJ1=", OBJ1);
OBJ1.incAge();
console.log("OBJ1=", OBJ1);
