// # Expected Outputs
// [
//     ["kita", "atik", "tika"],
//     ["aku", "kua"],
//     ["makan"],
//     ["kia"]
// ]

// # Input
// ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

const inputs = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

const getAsciiSum = (word) => {
  let sum = 0;
  word.split("").forEach((w) => {
    sum += w.charCodeAt();
  });
  return sum;
};

const GroupByWord = (inputs) => {
  const grouped = {};
  inputs.forEach((item, idx) => {
    const converted = getAsciiSum(item);
    if (typeof grouped[converted] === "undefined") {
      grouped[converted] = [item];
    } else {
      grouped[converted].push(item);
    }
  });
  console.log("grouped", grouped);
  return Object.values(grouped);
};

const grouped = GroupByWord(inputs);
