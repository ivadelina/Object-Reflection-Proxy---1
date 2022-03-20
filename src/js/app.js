/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const arr = [];
const arr1 = [];
const sortedObj = {};
const alphObj = {};
export default function orderByProps(obj, arg1) {
  for (const key in obj) {
    if (arg1.includes(key)) {
      sortedObj[key] = obj[key];
    } else {
      alphObj[key] = obj[key];
    }
  }
  Object.entries(sortedObj).forEach((item) => {
    arr.push({ key: item[0], value: item[1] });
  });
  Object.entries(alphObj).forEach((item) => {
    arr1.push({ key: item[0], value: item[1] });
  });
  arr1.sort((a, b) => {
    const akey = a.key.toLowerCase();
    const bkey = b.key.toLowerCase();
    if (akey < bkey) return -1;
    if (akey > bkey) return 1;
  });
  return [...arr, ...arr1];
}
