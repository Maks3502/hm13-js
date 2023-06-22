// const logItems = (array) => {
//         for(let i = 0; i < array.length; i ++){
//           const index = i + 1;
//            console.log(`${index} - ${array[i]}`)
//         }
        
//       };

//       logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//    logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// завдання 2

// const calculateEngravingPrice =  (message, pricePerWord) => {
//       const word = message.split(' ');
//       const wordlengt = word.length;
//       const totalPrice = wordlengt * pricePerWord;
//           return totalPrice;
//       };
      
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

const findLongestWord =  (string) => {
      let wors = string.split(" ")
      let bigWord = wors[0];
        for(let i = 0; i < wors.length; i++){
    if(wors[i].length > bigWord.length ){
      bigWord = wors[i];
      
    }
      };
      return bigWord;
    }
      /*
       * Виклич функції для перевірки працездатності твоєї реалізації.
      //  */
      console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
      
      console.log(findLongestWord('Google do a roll')); // 'Google'
      
      console.log(findLongestWord('May the force be with you')); // 'force'
    