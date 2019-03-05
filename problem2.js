// Flatten this array out: [1, 2, [3, 4, [5, 6], 7, [8, 9]]]
// Output should be[1, 2, 3, 4, 5, 6, 7, 8, 9]
// You can ONLY use arr.push(), arr.concat() as library / array functions.Please don 't use any other library or array fucntions.



let array = [1, 2, [3, 4, [5, 6], 7, [8, 9]]];

const flatten = (array) => {
    const flat = [].concat(...array);
    return flat.some(Array.isArray) ? flatten(flat) : flat;
}

console.log(flatten(array));