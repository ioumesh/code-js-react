// Q-1 truncate the text
// input str="hello i am umesh" ,maxlength=4
// output:"hello..."

function truncate(str, maxLength) {
  for (let i = 0; i < str.length; i++) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 1) + "...";
    } else {
      return str;
    }
  }
}

const input = "hello i am umesh";
console.log(truncate(input, 8));

// Q-2 palindrome number
// input :x=121  output true

function palindrome(number) {
  return number === +number.toString().split("").reverse().join("");
}

console.log(palindrome(121));

// Q-3 hamming distance
// given two string x and y , return  the hamming distance between them
// input :x="hello" y="hwllr" //should be same length
// output 2

function hammingDistance(str1, str2) {
  let count = 0;
  if (str1.length !== str2.length) {
    return "can not find  hamming distance";
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count;
}

console.log(hammingDistance("hello", "hwllr"));


// Q-4 valid anagram
// input s=anagram t="margana"
