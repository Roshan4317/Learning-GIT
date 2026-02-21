// Find if One String Is a Substring of Another (Manual Method)

// function isSubString(str, substr) {
//   for (let i = 0; i <= str.length - substr.length; i++) {
//     let match = true;

//     for (let j = 0; j < substr.length; j++) {
//       if (str[i + j] !== substr[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }

//   return false;
// }

// console.log(isSubString("abcde", "cd"));

// ***************************************************************************************************************

// Manual Substring Search (Without Using indexOf)

// function indexOfSubstr(str, substr) {
//   for (let i = 0; i <= str.length - substr.length; i++) {
//     let match = true;

//     for (let j = 0; j < substr.length; j++) {
//       if (str[i + j] !== substr[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return i;
//   }

//   return -1;
// }

// console.log(indexOfSubstr("abcde", "cd"));

// ***************************************************************************************************************

// Check if One String is Rotation of Another

// function isRotation(a, b) {
//   if (a.length !== b.length) return false;
//   a = a + a;

//   for (let i = 0; i <= a.length - b.length; i++) {
//     let match = true;

//     for (let j = 0; j < b.length; j++) {
//       if (a[i + j] !== b[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }

//   return false;
// }

// console.log(isRotation("abcde", "cdeab"));

// ***************************************************************************************************************

// 1️⃣ Count Frequency of Each Word in a Sentence
// function countWordFrequency(sentence) {
//   const words = sentence.toLowerCase().split(" ");
//   const frequency = {};

//   for (let word of words) {
//     frequency[word] = (frequency[word] || 0) + 1;
//   }

//   return frequency;
// }

// console.log(
//   countWordFrequency("i love coding and i love javascript")
// );

// ***************************************************************************************************************

// 2️⃣ Check If a String Is a Pangram

// function isPangram(sentence) {
//   const letters = new Set();

//   for (let char of sentence.toLowerCase()) {
//     if (char >= "a" && char <= "z") {
//       letters.add(char);
//     }
//   }

//   return letters.size === 26;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
