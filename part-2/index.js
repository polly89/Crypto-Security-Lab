
// The cipher will take in a string and an agreed upon key. Ex:("I love cryptography!", 2)
// The key will indicte how many ascii values each character will shift backwards by looping through the plaintext.  Ex: I - 2 = G
// If the string is greater than 6, it will revert to 6 to avoid having to loop through ascii values multiple times. 
// The ciphered message will be pushed into a new variable. 
// It will return the encryped message along with the key. Ex: 2Gjmtcapwnrmep_nfw
// This will help the person receiving the message know how to decrypt it. 

function secretMessager(str, key){
        let cipheredMessage = ''
    
        for(let i = 0; i < str.length; i++){
            let letterValue = str[i].charCodeAt()- key
                if(key >= 6){
                  key === 6  
                } else { key === key }
            cipheredMessage += String.fromCharCode(letterValue)
        }
        return `${key}${cipheredMessage}`
    }
    
    console.log(secretMessager("I love cryptography!", 2))


// This function will perform the opotisite effect to decrypt the secret message. 
// It will use the key to increse that many ascii values and reurn to it's original state. 
function decodeString(secretMessage) {
    let key = +(secretMessage[0])
    let plainText = ''
      
    for (let i = 1; i < secretMessage.length; i++){
        let letterValue = secretMessage[i].charCodeAt() + key
        plainText += String.fromCharCode(letterValue)
    }
    return plainText
    }
console.log(decodeString(`2Gjmtcapwnrmep_nfw`))
////////////////////////////////////////////////////////////////////////////////////////////
// Cipher OPTION 2

// Split() the string into an array. 
//                  [
//                     'I', ' ', 'l', 'o', 'v',
//                     'e', ' ', 'c', 'r', 'y',
//                     'p', 't', 'o', 'g', 'r',
//                     'a', 'p', 'h', 'y', '!'
//                     ]
// The length of the array will be pushed into the key variable.  
//                  let key = myArray.length;
// The key will be added to the front of the array.
//                       [
//                         20,  'I', ' ', 'l', 'o',
//                         'v', 'e', ' ', 'c', 'r',
//                         'y', 'p', 't', 'o', 'g',
//                         'r', 'a', 'p', 'h', 'y',
//                         '!'
//                         ]
// It will determine how many ascii units each letter will shift.
// To shift each letter we will have to:
//                         -  loop through the array starting at index 1
//                         -  create a variable to store the ascii unit + the number
//                         -  if the value of the modified character is more than the length of the ascii divide the key by the num of ascii values???
// //                         -  return the ciphered message as a string. 

// function secretMessager(str){
//     const myArr = str.split('');
//     let key = myArr.length;
//     myArr.unshift(key);

//     let num = (myArr[0])
//     let cipheredMessage = ''

//     for(let i = 1; i < myArr.length; i++){
//         let letterValue = myArr[i].charCodeAt()+ num
//         // SOME CODE TO HELP ME LOOP TO THE FRONT OF ASCII MAYBE USING MODULO % EX: STRGLENGTH % LARGESTASCIICODE
//         cipheredMessage += String.fromCharCode(letterValue)
//     }
//     return [cipheredMessage]
// }

// console.log(secretMessager("I love cryptography!"))



// // function decodeString(secretMessage) {
// //     let num = +(secretMessage[0])
// //     let answer = ''
  
// //     for (let i = 1; i < secretMessage.length; i++){
// //       let letterValue = secretMessage[i].charCodeAt() + num
// //       answer += String.fromCharCode(letterValue)
// //     }
// //     return answer
// //   }

// //   console.log(decodeString(']4y4w{u|5)'))
