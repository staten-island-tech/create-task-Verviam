import "../css/style.css";

let findDiff = function (s, t) {
  let sortS = [...s].sort();
  let sortT = [...t].sort();
  for (let i = 0; i < sortT.length; i++) {
    if (sortT[i] != sortS[i]) {
      return sortT[i];
    }
  }
};
console.log(findDiff("abdcef", "abcduef"));



let mergeFun = function (str1, str2) {
  let merged = "";
  let distance = Math.max(str1.length, str2.length);
  for (let i = 0; i < distance; i++) {
    if (i < str1.length) {
      merged = merged + str1[i];
    }
    if (i < str2.length) {
      merged = merged + str2[i];
    }
  }
  return merged;
};
console.log(mergeFun("abc", "defgdfghdfghdfghfhdg"));



let isMono = function (arr) {
  let direction = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      if (direction === 0) {
        direction = 1;
      } else if (direction === -1) {
        return false;
      }
    } else if (arr[i] < arr[i - 1]) {
      if (direction === 0) {
        direction = -1;
      } else if (direction === 1) {
        return false;
      }
    }
  }
  return true;
};