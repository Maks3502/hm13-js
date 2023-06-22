// const logItems = (array) => {
//         for(let i = 0; i < array.length; i ++){
//           const index = i + 1;
//            console.log(`${index} - ${array[i]}`)
//         }
        
//       };

//       logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//    logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// завдання 2

// const calculateEngravingPrice =  (message, pricePerWord) =>// const calculateEngravingPrice = (message, pricePerWord) => message.split(" ").length * pricePerWord; 
      
//       /*
//        * Виклич функції для перевірки працездатності твоєї реалізації.
//        */
//       console.log(
//         calculateEngravingPrice(
//           'Proin sociis natoque et magnis parturient montes mus',
//           10,
//         ),
//       ); // 80
      
//       console.log(
//         calculateEngravingPrice(
//           'Proin sociis natoque et magnis parturient montes mus',
//           20,
//         ),
//       ); // 160
      
//       console.log(
//         calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//       ); // 240
      
//       console.log(
//         calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20), ); // 120


// завдання 3

// const findLongestWord =  (string) => {
//       let wors = string.split(" ")
//       let bigWord = wors[0];
//         for(let i = 0; i < wors.length; i++){
//     if(wors[i].length > bigWord.length ){
//       bigWord = wors[i];
      
//     }
//       };
//       return bigWord;
//     }
//       /*
//        * Виклич функції для перевірки працездатності твоєї реалізації.
//       //  */
//       console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
      
//       console.log(findLongestWord('Google do a roll')); // 'Google'
      
//       console.log(findLongestWord('May the force be with you')); // 'force'


// завдання4



// завдання5
// const checkForSpam =  (message) => {
//     let responsible;
//     const newMessage = message.toLowerCase();
  
//     if (newMessage.includes("spam") || newMessage.includes("sale")) {
//       responsible = true;
//     } else {
//       responsible = false;
//     }
  
//     return response;
//   };

   /*
       * Викличи функції для перевірки працездатності твоєї реалізації.
       */
//    console.log(checkForSpam('Latest technology news')); // false
      
//    console.log(checkForSpam('JavaScript weekly newsletter')); // false
   
//    console.log(checkForSpam('Get best sale offers now!')); // true
   
//    console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// завдання 6
    // function makepizza() => "your pizza is being prepared, plse wait"

// const result = makepizza("") ;
// const pointer = makepizza;



// завдання 7
// const deliverPizza = (pizzaName) => `Delivering ${pizzaName} pizza.` 

//   const makePizza = (pizzaName) => `Piz za ${pizzaName} is being prepared, please wait...`;

//   // Chande code below this line

//   const makeMessage = (pizzaName, callback) => callback (pizzaName) ;

//  

// завдання 8

// const makePizza = (pizzaName, callback) => {

//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

//     callback(pizzaName);

//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {

//     console.log(`Delivering pizza ${pizzaName}.`);

//   });

//   const eatPizza = (pizzaName) => {
//     const eatingPizza = "fourchese"
//   }

//   // Change code below this line

//   makePizza("Ultracheese", eatPizza);
  
//   makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`)
//   } )

// завдання 9
// // const butonRef = document.querySelector(".jsbtn");

// const buttonRef = document.querySelector("[data-button]");

// buttonRef.addEventListener("click", showInfo);

// const = showInfo() => {
//     console.log("клик по кнопци")
// }

// завдання 10
// const applyCallbackToEachElement = (arr, callback) => callback(arr);

// const squareCallback = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i];
//      }
//      return arr;
// };

// const arr = [1, 2, 3, 4, 5];

// const result = applyCallbackToEachElement(arr, squareCallback);

// console.log(result); // [1, 4, 9, 16, 25]