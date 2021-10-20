let str = "Hello my beautiful world!";

///V.1

let result = text => {
    return Object.entries(text.split('').reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;
      return acc;
      
    }, {}));
  } 
  console.log(result(str));

///V.2

// let result = [];
// str.split('').forEach(function(a){
//     result[a] = result[a] + 1 || 1; 
// });
// for (let key in result)
//     console.log('symbol:' + key + ' ; '+ ' amount:' + result[key]);