// Write a function hipsterfy(sentence) that takes in a sentence string and returns
//the sentence where every word is missing its last vowel

let hipsterfy = function(sentence) {
    newWords = [];
    words = sentence.split(' ');

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        newWords.push(removeLastVowel(word));
    }

    return newWords.join(' ');
}

let removeLastVowel = function(word) {
    let vowels = 'aeiouAEIOU';

    for(let i = word.length-1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i+1);
        }
    }
}