/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/


function createCharMap(text) {
    let charMap = {}

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    return charMap
}

function isAnagram(stringA, stringB){
    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false;
            }
        }
        return true
    } else {
        return false
    }
}

function anagramCounter(wordsArray){
    var counter = 0;
    var arrayLength = wordsArray.length;

    //loop through input array of words
    for(let i=0;i<arrayLength;i++){

        for(let j=i+1;j<arrayLength;j++){
            
            var word1 = wordsArray[i];
            var word2 = wordsArray[j];

            console.log(`${word1}, ${word2}`);

            if(isAnagram(word1, word2)){
                counter++;
            };
        }

    }

    return counter;
}