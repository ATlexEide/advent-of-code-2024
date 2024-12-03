const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream(`${__dirname}/list.txt`),
});

const leftArrUnsorted = [];
const rightArrUnsorted = [];

lineReader.on("line", (line) => {
  //   console.log("Line from file:", line);
  line = line.split("   ");
  leftArrUnsorted.push(line[0]);
  rightArrUnsorted.push(line[1]);
});

lineReader.on("close", () => {
  console.log("File closed");
  const leftArr = leftArrUnsorted.toSorted();
  const rightArr = rightArrUnsorted.toSorted();
  // Part 1
  const differences = [];
  for (let i = 0; i < leftArr.length; i++) {
    differences.push(Math.abs(leftArr[i] - rightArr[i]));
  }
  const num = differences.reduce((acc, curr) => acc + curr, 0);
  // Part 2
  const similarities = [];
  for (let i = 0; i < leftArr.length; i++) {
    counter = 0;
    rightArr.forEach((number) => {
      if (number === leftArr[i]) counter++;
    });
    similarities.push(leftArr[i] * counter);
  }
  const num2 = similarities.reduce((acc, curr) => acc + curr, 0);
  console.log(num2);
});
