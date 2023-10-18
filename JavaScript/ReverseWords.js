function revSentence(sentence){      //function to take the sentence and join the reversed words
    const w=sentence.split(' ');                //splitting the sentence into a an array of words
    for(let i = 0; i < w.length; i++){
      w[i]=revWord(w[i]);                       //calling the word reversal function
    }
    return w.join(' ');                         //joining the reversed words
}
 

function revWord(word){             //function to reverse every word from a sentence
    const c=word.split('');
    c.reverse();                    //reverseing each character in a word
    return c.join('');                  //joining the reversed characters and returning the reversed word
}


const sentence=prompt("Please Enter Your Sentence :");   //prompt to enter your sentence
if(sentence === ""){                                        //if empty then log error message
    console.log("Empty Sentence")
}else{
    const result=revSentence(sentence);                     //calling the function to reverse words
    console.log(result); 
}