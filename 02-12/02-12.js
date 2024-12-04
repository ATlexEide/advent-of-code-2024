const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream(`${__dirname}/list.txt`),
});
let tempArr = [];
let safeCount = 0;
let lastNum = 0;
let safe = true;
let ascending = null;
lineReader.on("line", (line) => {
  lastNum = 0;
  safe = true;
  line = line.split(" ");
  ascending = line[0] < line[1] ? true : false;
  // console.log(line);
  line.forEach((num) => {
    num = Number(num);
    if (!safe) return;
    if (!lastNum) {
      lastNum = num;
      return;
    }
    let diff = Math.abs(lastNum - num);
    if (diff > 3 || diff < 1) safe = false;
    if (ascending && lastNum > num) {
      safe = false;
      // console.log(line);
      return;
    }
    if (!ascending && lastNum < num) {
      safe = false;
      // console.log(line);
      return;
    }
    lastNum = num;
  });
  if (safe) {
    // console.log(line);
    // tempArr.push(line);
    safeCount++;
  }
});
lineReader.on("close", () => {
  console.log(safeCount);
});
