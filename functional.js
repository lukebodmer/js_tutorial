let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}
//urls: Imperative version
/*function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(string));
  });
  return urls;
}
console.log(imperativeUrls(states));*/

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//concatinate functionalUrls
function createUrls(elements) {
  let prefix = "https://example.com/";
  return elements.map(element => `${prefix}${urlify(element)}`);
}
console.log(createUrls(states));

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s/).length === 1);
};
console.log(functionalSingles(states));

function findDakotas(elements) {
  return elements.filter(element => element.includes("Dakota"));
};
console.log(findDakotas(states));

function findDakotas2(elements)  {
  return elements.filter(element => element.split(/\s+/).length === 2);
};
console.log(findDakotas2(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

function myReducer(elements)  {
  return elements.reduce((product, element) => product *= element)
}
console.log(myReducer(numbers));

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});}
console.log(functionalLengths(states));
