const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
true - orange
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
class MyClass { constructor() { this.property = getRandomString(); } }
kiwi + false
const findSmallestNumber = numbers => Math.min(...numbers);
kiwi

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

false / banana
const findLargestNumber = numbers => Math.max(...numbers);

function addNumbers(a, b) { return a + b; }
apple + kiwi
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getUniqueValues = array => [...new Set(array)];
50 - false
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

orange

const squareRoot = num => Math.sqrt(num);
const findSmallestNumber = numbers => Math.min(...numbers);
