
function checkPermutation(string1, string2) {
    // optimization for when the strings are of differing lengths
    if (string1.length !== string2.length) { return false; }
    // convert each string into a sorted array of characters
    const sorted1 = string1.split('').sort();
    const sorted2 = string2.split('').sort();
    // console.log(sorted1,'/n', sorted2);
    for (let i=0; i<sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return false;
        }
    }
    // all conditions are met
    return true;
}

console.log('god and dog are permutations of each other: ', checkPermutation('god', 'dog'));
console.log('case-sensitive, God and Dog are not permutations: ', !checkPermutation('God', 'Dog'));
console.log('Parameter order does not matter: ', checkPermutation('dog', 'god'));
console.log('Differing lengths: ', !checkPermutation('dog', 'biggerDog'));
