function analyze_end(sentence){
    if (sentence[sentence.length -1] != '.'){
        //return true
        throw Error("Sentence must end with .")
    }

    let word = 1;
    let letter = 0;
    let volwel = 0;

    const vowel = new Set (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for ( i= 0; i <= sentence.length; i++){
        letter++
        if (sentence[i] == ' '){
            word++
        }
        if (vowel.has(sentence[i])) {
            volwel++
        }

    }

    return {word, volwel, letter}
}

// test 

sent = "Hello World Whats up."

console.log(analyze_end(sent))