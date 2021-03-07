function avg1(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length;
}

console.log(avg1([0, 50]));
console.log(avg1([75, 76, 80, 95, 100]));
