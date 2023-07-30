/**
 * const,let等の変数宣言
*/
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は差異宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 ="let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";

// const val4 = {
//   name: "静",
//   age:"27",
// };
// val4.name = "しず";
// val4.address = "東京";
// console.log(val4);

// 配列、オブジェクトはconstで宣言。
const val5 = ['dog', 'cat'];
val5[0] = "bird";
val5.push('monkey');
console.log(val5);