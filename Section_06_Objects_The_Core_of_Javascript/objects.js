const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgColorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
};

console.log(fitBitData.totalMiles);

const numbers = {
  100: 'one hundred',
  16: 'sixteen',
  '76 trombones': 'great song',
};

console.log(numbers['100']);
console.log(numbers['76 trombones']);

numbers[200] = 'two hundred';
console.log(numbers[200]);

const student = {
  firstName: 'Greg',
  lastName: 'Wagner',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88
  }
};

let grade = (student.exams.midterm + student.exams.final) / 2.0;
console.log(grade);

const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
];
