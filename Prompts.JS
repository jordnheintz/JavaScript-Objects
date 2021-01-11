const car = {
    make : "ford",
    model : "mustang",
    color : "black",
    type : "sedan",
    tires : "firestone",
    mode : "sport",
    gasoline : "super",
    tints: '33%', 
    carplay: true
   }

  // 1
  console.log(car)

  // 2
  const func = (obj) => {
      console.log(obj)
  }

  // 3
  delete car.gasoline;
  console.log(car)

  // 4
  const key = (obj) => {
      for(let keys in car) {
        
      }
      return Object.keys(obj)
  }

  // 5
  const values = (obj) => {
      for(let keys in car) {
        
      }
      return Object.values(obj)
  }
  
  // 6
  car.tints = '33%'
  car.carplay = true
  console.log(car)
  
  // 7
  car.startEngine = function() {
      console.log("VROOM VROOM")
      const engineOn = true
  }

  // 8
  car.turnOffEngine = function() {
      console.log("car turned off")
      engineOn = false
  }
  
  // 9
  for(let key in car) {
   console.log(car[key] + "")
  }
  
  // 10
  const penguin = {
      favoritFood: ['krill', 'squid', 'fish'], 
      canFly: false,
      color: 'black and white', 
      bird: 'yes', 
  }
  
  penguin.chirpSound = function() {
   console.log("Sqwack!")
  }
  penguin.birdDiet = function() {
      console.log("Krill")
  }
  penguin.fly = function() {
      if(penguin.canFly === true){
          console.log("I live in the sky.")
      } else {
          console.log("I'd like to stay on the ground.")
      }
  }
  
  // 11
  const house = {
      rooms: 6.5, 
      cost: 350000, 
      kitchen: true, 
      livingRoom: true,
      area: 'New Castle',
      age: 200,
      allRooms: ['1 kitchen', '1 dining room', '1 1/2 bathrooms', '1 living room', '2 master bedrooms'],
      houseTwo: {
        rooms: 4, 
        age: 100,
        kitchen: false
      }
  }   
  
      house.cook = function() {
          if(house.kitchen === true) {
              console.log("Cookin' time!")
          } else {
              console.log("Lets get takeout")
          }
      }
  
      house.old = function() {
        if(house.age === 200) {
            console.log("Old!")
        } else {
            console.log("Newer house.")
        }
      }
  
      house.roomCount = function() {
          console.log(`I have ${rooms} rooms!`)
      }