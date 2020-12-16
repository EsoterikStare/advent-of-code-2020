const data = require('./data');

const processData = (numbers) => {
  // find the two numbers whose sum is 2020 then find their product
  let num1 = 0;
  let num2 = 0;

  const targetSum = 2020;

  numbers.some((number1) => {
    num1 = number1;
    numbers.some((number2) => {
      num2 = number2;
      return num1 + num2 === targetSum;
    });
    return num1 + num2 === targetSum;
  });

  console.log(num1 * num2); // 181044
};

processData(data);
