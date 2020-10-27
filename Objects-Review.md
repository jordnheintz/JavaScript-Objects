![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Objects

# Table of Content

- [Javascript Objects](#javascript-objects)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
    - [Objects](#objects)
      - [Object Syntax/Example](#object-syntaxexample)
      - [Object Properties](#object-properties)
      - [Accessing Object Properties](#accessing-object-properties)
    - [Create Instance/Add/Update/Delete Object](#create-instanceaddupdatedelete-object)
      - [Create new instance](#create-new-instance)
      - [Update an Object](#update-an-object)
      - [Add a property](#add-a-property)
      - [Delete From Object](#delete-from-object)
      - [Iterating through an object](#iterating-through-an-object)
      - [Nested Object](#nested-object)
    - [Object Methods](#object-methods)
        - [`This` keyword](#this-keyword)
        - [Accessing Object Methods](#accessing-object-methods)
        - [Adding a method](#adding-a-method)
  - [Next Steps](#next-steps)

## Objectives

- Understanding what objects are.
- How to create an object.

## About

In this unit you learned about objects, what they are, and how to create them. This lesson will serve to reiterate what you learned.

### Objects

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects. In JavaScript, an object is a standalone entity, with properties and type.

#### Object Syntax/Example

You can create an object in three ways:

**Literal Notation**

```js
let dev = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  job: "Software Developer",
};
```

**Using Keyword `New`**

```js
let dev = new Object();

// then you can populate the object
dev.firstName = "John";
dev.lastName = "Doe";
dev.age = 23;
dev.job = "Software Developer";
```

**Constructor Function**

```js
function Dev(firstName, lastName, age, job) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.job = job;
}

//now create an instance
let John = new Dev("John", "Doe", 23, "Software Developer");

//check console
console.log(John);
```

#### Object Properties

The **key:value** pairs in JavaScript objects are called properties:
| Property/Key| Value |
| ----------- | ----------- |
| firstName | Raymond |
| lastName | Nwambuonwo |
| age | 28 |
| job | Software Developer |

#### Accessing Object Properties

You can access object properties in two ways, bracket or dot notation:

**Dot Notation:**

```js
console.log(dev.lastName);
```

**Bracket Notation:**

```js
console.log(dev["firstName"]);
```

### Create Instance/Add/Update/Delete Object

#### Create new instance

You can create a new instance of an object using the `new` keyword.

```js
let jane = new Dev("Jane", "Doe", 27, "Software Developer");
```

#### Update an Object

You can also update an object:

```js
dev.age = 30;

//or

dev["job"] = "Director";
```

#### Add a property

You can also add a property to an object:

```js
dev.motto = "code code code!";
```

#### Delete From Object

Using the `delete` keyword will delete an object property entirely. This deletes the whole key-value pair.

```js
delete dev.age;
```

#### Iterating through an object

In order to iterate through an object, you can use a loop. Using a `for in` loop we can iterate through the object and print out the object's keys to the console.

```js
for (key in dev) {
  console.log(key);
}
```

#### Nested Object

Object properties aren't limited to nest collections inside of an object.

```js
let dev = {
  firstName: "Raymond",
  lastName: "Nwambuonwo",
  age: 28,
  location: {
    County: "Prince Georges",
    state: "Maryland",
  },
  pets: ["gecko", "uromastyx"],
  car: {
    make: "kia",
    model: "Optima",
    color: "Silver",
  },
  talents: ["coding", "poetry", "netflix"],
};

console.log(dev);
```

### Object Methods

JavaScript methods are actions that can be performed on objects. Methods are functions stored as object properties.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

##### `This` keyword

In a function definition, `this` refers to the "owner" of the function. In the example above, `this` is the person object that "owns" the fullName function.
In other words, `this.firstName` means the `firstName` property of this object

As you can see above, the `fullName` property is a method that contains a function that will return the person's full name when called.

##### Accessing Object Methods

You access an object method with the following syntax:

```js
objectName.methodName();
//which will be
person.fullName();
```

If you access the `fullName` property, without `()`, it will return the function definition.

##### Adding a method

You can add a method to an object as well, it does not have to be within the object itself, utilize dot notation to access and add:

```js
person.name = function () {
  return this.firstName + " " + this.lastName;
};
```

## Next Steps

Now that you are familiar with the objects in JavaScript, head on over to the [Lab](../Objects/Objects%20Lab.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
