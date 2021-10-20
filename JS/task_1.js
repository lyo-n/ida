
const inputArray = [3, 6, -2, -5, 7, 3];
// const inputArray= [-1, -2];
// const inputArray = [5, 1, 2, 3, 1, 4];
// const inputArray = [1, 2, 3, 1, 4];
// const inputArray = [1, 2, 3, 0];
// const inputArray = [9, 5, 10, 2, 24, -1, -48];



let result = inputArray.map(function(item, i, a){
    return (item*a[++i]) //
});

let results=  result.filter(item => !isNaN(item)); //убираем isNaN
console.log(inputArray);
console.log(`Максимальное произведение двух соседних чисел равен: ${Math.max.apply(null, results)}`);

alert(`Максимальное произведение двух соседних чисел равен: ${Math.max.apply(null, results)} \n ${inputArray}`);
