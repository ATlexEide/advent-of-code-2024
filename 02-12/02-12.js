const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream(`${__dirname}/list.txt`),
});
let tempArr = [];
lineReader.on("line", (line) => {
  lineArr = line.split(" ");
  safe = true;
  arr = [];
  for (let i = 0; i < lineArr.length; i++) {
    arr.push(lineArr[i]);
    const diff = Math.abs(lineArr[0] - lineArr[lineArr.length - 1]);
    if (diff / lineArr.length > 3 || diff < lineArr.length) safe = false;
    // if (
    //   (line[i] < line[i + 1] && line[i + 1] > line[i + 2]) ||
    //   (line[i] < line[i + 1] &&
    //     line[line.length - 1] > line[line.length - 1]) ||
    //   (line[i] > line[i + 1] && line[i + 1] < line[i + 2]) ||
    //   (line[i] > line[i + 1] && line[line.length - 1] < line[line.length - 1])
    // )
    // safe = false;
    if (safe) tempArr.push(arr);
  }
});
lineReader.on("close", () => {
  console.log("File closed");
  console.log(tempArr.length);
  let counter = 0;
  tempArr.forEach((array) => {
    counter++;
    // for(let i = 0; i < tempArr.length; i++){

    // }
    // console.log("Running");
    console.log(counter);
    checkDec(array);
    checkInc(array);
    // console.log(checkInc(array));
    if (checkInc(array) && !checkDec(array)) {
      counter++;
      console.log(counter);
    } else if (!checkInc(array) && checkDec(array)) {
      counter++;
      console.log(counter);
    } else {
      return;
    }
  });
  console.log(counter);

  function checkInc(array) {
    tmp = 0;
    safe = true;
    while (tmp < array.length) {
      if (array[tmp + 1] === null || array[tmp + 1] === undefined) return;
      if (array[tmp] < array[tmp + 1]) {
        tmp++;
      } else {
        safe = false;
        return;
      }
    }
    if (safe) {
      return true;
    }
  }
  function checkDec(array) {
    tmp = 0;
    safe = true;
    while (tmp < array.length) {
      if (array[tmp + 1] === null || array[tmp + 1] === undefined) return;
      if (array[tmp] > array[tmp + 1]) {
        tmp++;
      } else {
        safe = false;
        return;
      }
    }
  }
});
