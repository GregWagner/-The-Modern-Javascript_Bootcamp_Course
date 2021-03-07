// function cleanNames(strings) {
//  const a = [];
//  for (let str of strings) {
//    a.push(str.trim());
//  }
//  return a;
//}

function cleanNames(strings) {
  return strings.map(function (str) {
    return str.trim();
  });
}

let names = [
  "   timeothree",
  "    darth_hater",
  "sassyfrassy    ",
  "  elton john   ",
];

let results = cleanNames(names);

console.log(results);
