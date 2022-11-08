// 1.Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
const reverse = (x) => x.split("").reverse().join("");
// console.log(reverse('abcdef'));

// 2.Viết một function xoá các phần từ trùng lặp trong một mảng các số

//cách 1
function deleteDuplicates1(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
//cách 2
const deleteDuplicates2 = (arr) => {
  const objSet = new Set(arr);
  return (newArr = [...objSet]);
};
// console.log(deleteDuplicates1([1, 2, 3, 5, 4, 2, 6, 4]),deleteDuplicates2([1, 2, 3, 5, 4, 2, 6, 4]));

// 3.Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng
function getElements(arr) {
  arr.sort();
  let result = {
    value: "",
    count: 0,
  };
  let count = 1;
  for (let i = arr.length - 1; i > 0; --i) {
    if (arr[i] == arr[i - 1]) ++count;
    else {
      count = 1;
    }
    if (result.count < count) {
      result.value = arr[i];
      result.count = count;
    }
  }
  return result;
}

// 4. nhập một số nguyên n, tìm chữ số lớn nhất trong n

function getMaxNumber(n) {
  let objSet = new Set(String(n).split(""));
  let newN = [...objSet];
  return Math.max(...newN);
}
// console.log(getMaxNumber(12345229228));

// 5. cho một mảng n số nguyên, đếm xem trong mảng có bao nhiêu số khác nhau. và mỗi số xuất hiện bao nhiêu lần trong mảng

function getCount(arr) {
  let objSet = new Set(arr);
  let newArr = [...objSet];
  let countNumber = newArr.length;
  let count = 1;
  let result = [];
  result.push({
    differentNumbers: countNumber,
  });
  arr.sort();
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] == arr[i - 1]) ++count;
    else {
      count = 1;
    }
    let numbers = {
      numbers: arr[i],
      count: count,
    };
    result.push(numbers);
  }
  let resultEnd = result
    .sort((a, b) => (a.count > b.count ? -1 : 1))
    .filter((item1, index1) => {
      return (
        index1 ==
        result.findIndex((item2) => {
          return item1.numbers === item2.numbers;
        })
      );
    });
  return resultEnd;
}

// console.log(getCount([1, 2, 1, 2, 1, 2]));
