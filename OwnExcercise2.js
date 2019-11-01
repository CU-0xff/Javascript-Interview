function stringCompare(a,b) {
    return (a.toLowerCase() > b.toLowerCase()) ? -1 : 1;
}

var animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];

animals.sort(stringCompare);
console.log(animals);
// ["ant", "bee", "cat", "dog", "elephant"]

//Problem: Sorting does not reflect equal case (return 0)