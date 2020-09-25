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
      - [Create new instance](#create-new-instance)
      - [Add/Update an Object](#addupdate-an-object)
      - [Delete From Object](#delete-from-object)
      - [Iterating through an object](#iterating-through-an-object)
      - [Nested Object](#nested-object)
  - [Next Steps](#next-steps)

## Objectives

- Understanding what objects are.
- How to create an object.

## About

In this unit you learned about objects, what they are, and how to create them. This lesson will serve to reiterate what you learned.

### Objects

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects. In JavaScript, an object is a standalone entity, with properties and type.

#### Object Syntax/Example

You can create an object in two ways:

**Object Literal Notation**

```js
let dev = {
  firstName: "Raymond",
  lastName: "Nwambuonwo",
  age: 28,
  job: "Software Developer",
};
```

**Object Constructor Method**

```js
let dev = new Object();

// then you can populate the object
(dev.firstName = "Raymond"),
  (dev.lastName = "Nwambuonwo"),
  (dev.age = 28),
  (dev.job = "Software Developer");
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

```js
Dot Notation:
console.log(dev.lastName)
```

```js
Bracket Notation:
console.log(dev["firstName"])
```

#### Create new instance

You can create a new instance of an object using the `new` keyword.

```js
let rog = new Dev("Roger", "Campbell", 29, "Software Developer");
```

#### Add/Update an Object

You can also update an object:

```js
dev.age = 30;
// or
car["job"] = "Director";
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

## Next Steps

Now that you are familiar with the objects in JavaScript, head on over to the [Lab](../Objects/Objects%20Lab.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
