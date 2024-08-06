'use strict';
//single-line comment
/*
multi-line comment
*/

const assert = require("assert");
const { default: test } = require("node:test");
const { json } = require("stream/consumers");


//Assertions
assert.equal(7+4,11)

//Printing statements in the console
// console.log("Here we go mastering Javascript");
// console.error("There was error")

//Logical Operators
assert.equal(true && false, false)
assert.equal(true || false, true)

//Operators for numbers
assert.equal(3+4,7)
assert.equal(3-4,-1)
assert.equal(3*4, 12)
assert.equal(3/4,0.75)
assert.equal(3%4,3)

//Opeators for BigInt\
assert.equal(3n + 4n, 7n)
// assert.equal(BigInt(4n) - BigInt(3n),BigInt(1))
//In assigning a BigInt variable n is added to the value being converted into a bigInt or we use the BigInt() constructor

//Operators for strings
assert.equal("hello"+"world","helloworld")
assert.equal('I see ' + 3 + ' monkeys', "I see 3 monkeys")

//Comparison Operators
assert.equal(3<4, true)
assert.equal(3>4, false)
assert.equal(3 <= 4, true)
assert.equal(3 >= 4, false)
assert.equal('abc' === 'abc', true)
assert.equal('abc' !== 'def',true)

//Declaring variables
//Immutable variable binding
const x =8;
assert.equal(3+5,x)

//Mutable variable binding
let y ;
y=12;

//Declaring functions
//Ordinary function declaration
function functionName(a,b){
  return a+b
}

assert.equal(functionName(3,4),7)

// Arrow function declaration
const arrowFunction=(a,b)=>
  {
    return a+b//Code block
  }
const addValues=(a,b)=> a+b //returns expression
assert.equal(addValues(7,5),12)
assert.equal(arrowFunction(3,4),7)

//Objects
const user ={
  name: "John",
  age: 12,
  role: "Admin",
  authState: false,
  getRole(){
  return this.role
  },
  getUserName(){
    if(!this.authState)
    {
      this.name = "Anonymous"
      return this.name
    }
    else{
      return this.name
    }
  }
}

//Testing
assert.equal(user.name,"John")
assert.equal(user.getRole(), "Admin")
console.log(user.getRole(), user.getUserName())

//Arrays
//Creating an array via array literal
const arr =[1,2,3,4,5,6]
// assert.assert.equal(arr.sort(),[1,2,3,4,5,6])
assert.equal(arr.length,6)
assert.equal(arr[1],2)

//Adding items to end of array
arr.push(7);
arr.pop(5);
console.log(arr)

//for-of loop

for(const element of arr){
  console.log(element)
}

//Syntax continued

//Defining classes

class Person{
//Define the constrcutor for the properties of the class
  constructor(name,age){
    this.name = name,
      this.age = age
    //Making age private
    //this._age = age
  }
  describe(){
    return `Person named ${this.name} is ${this.age} years old`
  }
  static logNames(persons){
    for(const person of persons)
      console.log(person.name, person.age)
  }
}

class Employee extends Person{
  constructor(name,age,title){
    super(name,age)
    this.title = title
  }
  describe()
  {
    return super.describe()+ ` ${this.title}`
  }
}

//Creating an instance of the class 
const person1= new Person("John",12);
const employee1209 = new Employee("James Bond",12,"Hitman")
console.log(person1)
console.log(employee1209)
console.log(employee1209.describe())

//Testing class instance
const employee2209 = new Employee("Abena",18, "Pharmacist")
 assert.equal(
employee2209.describe(),
  'Person named Abena is 18 years old Pharmacist'
)

//Exception Handling
function throwsException()
{
  throw new Error('Problem!');
}
//try-catch block
function trycatch (){
  try
  {
    console.log(throwsException())
  }
  catch(error){
    assert.ok(error instanceof Error);
    assert.equal(error.message,'Problem!')
  }
}
trycatch()

//Reserved words can't be property names. However, they can be variable names

/*
A statement is a piece of code that performs some sought of action e.g. the if-else statement, the for-of loop, the function declaration

An expression is a piece of code that can be evaluated to produce a value. For example  the code between parantheses is an expression

-Guidelines for defining statements or expressions

1. Functions must be a sequence of statements
2.The arguments or parameter of a function call  or method must be an expression
*/


/*
Apart from normal function declarations, other statements in JS end with a semicolon.
The reason why an arrow function may have a semicolon at the end is because it is not necessarily the  fucntion statement that is being terminated with a colom.However, the embedded arrow function expression is what is being terminated with a semicolon.
*/

//The Automatic SemiColon Insertion(ASI) is a mechanism in Javascript that automatically inserts semicolons where they are missing

/*
Normal mode is default in Javascript code fragments .
However, for strict mode , it is default in modules and classes


//Why Strict Mode ?
1.In strict mode, assigning an undeclared variable will throw an error unlike in normal mode where the variable will become a global variable.

2.In strict mode, function declarations are blocked-scoped .However,in normal mode, function declarations are funtion scoped.

3. In normal mode, assigning an immutable variable will not throw an error unlike in strict mode.
*/

//Interactive Javascript Command Lines

//The Node REPL -Read Eval Print Loop
//The Node REPL is a CLI for the Javascript runtime environment.

//Consoles mostly run in unstrict mode

//Printing a value with substitutions
console.log("hello %s","World")
console.log(`%o`,{foo:"abc",bar:"def"})
console.log(`%j`,{"foo":"abd","bar":"def"})

//Printing error information
console.error("error information")

// Printing nested objects using JSON.stringify()
console.log(JSON.stringify({foo:"abc", bar:"def"},null,2))



//Assertion API

/*
Overiview
---------
In software development , assertion is basically stating facts about a piece of code that must be true.
Node JS has an inbuilt function for assertion called assert

The main use case for assesrtions is to implement test-driven code development.
They are also used for documenting results in code.
*/

//DOCUMENTING RESULTS IN CODE
//When writing a function generally, the assert function enables us to test the function on the spot to make sure it is functioning as expected.

//TEST_DRIVEN DEVELOPMENT(MOCHA)
function hello(personBeingGreeted){
  return `Hello ${personBeingGreeted}`
}
test('describe test',()=>
  {
    assert.equal(hello("World"),"Hello World");
    assert.equal(hello("James"), "Hello James")
  })

//=== does not compare the contents of the object it only compares their identities
/*
The strict equal uses === to compare values.
The alternative to this especially in terms of objects is the deep equal which use JSON.stringify() to compare the contents of the objects.
//The deep equal method works for arrays as well.
*/
assert.deepEqual({foor:"abd",bar:"def"},{foo:"abd", bar:"def"})
assert.notEqual([a,b,c,d], [a,b,c,d])

//Normal equality
/*
//Syntax:
function equal(actual:any, message:any. message?:string):void
//What does this really mean? 
assert.equal(actual, expected, message)
==>actual === message (must be true) -- else throw an AssertionError

//assert.notEqual(actual, expected, ,message)
==> actual !== expected (must be true) -- else throw an AssertionError
//The optional last string -message can be used to describe what is asserted
where fuunction equal is the appropriate assetion function
*/


//Deep Equality
/*
//Syntax:
function equal(actual:any, message:any. message?:string):void
//What does this really mean? 
assert.deepEqual(actual, expected, message)
==>actual must be deeply or must have the same content as message (must be true) -- else throw an AssertionError

//assert.notDeepEqual(actual, expected, ,message)
==> actual must not be deeply equal to or must not have the same content as message-- else throw an AssertionError
//The optional last string -message can be used to describe what is asserted
where fuunction equal is the appropriate assetion function
*/

//Expecting Exceptions
/*
In any case where we expect an exception , we use the throws keywords
It takes the function block as its first parameter and is only successful if there a throw

//Syntax
------------------------------------------------------
function throws(block:Function, message?:string):void
------------------------------------------------------
*/
assert.throws(()=>
  {
    null.prop;
  }, TypeError)

//The Fail Tool
/*
Always throws an AssertionError when it is called 
It's most common use case is in unit testing

//Syntax
------------------------------------------------------
function fail(message: string | Error ):never
------------------------------------------------------
*/
try
{
  functionThatShouldThrow();
  assert.fail();
}
catch(error)
{
  //Success
}