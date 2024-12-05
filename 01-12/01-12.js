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
  let difference = 0;
  for (let i = 0; i < leftArr.length; i++) {
    difference += Math.abs(leftArr[i] - rightArr[i]);
  }
  console.log(difference);
  // Part 2
  let similarity = 0;
  leftArr.forEach((num1) => {
    counter = 0;
    rightArr.forEach((num2) => {
      if (num2 === num1) counter++;
    });
    similarity += num1 * counter;
  });
  console.log(similarity);
});
