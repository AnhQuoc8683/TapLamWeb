var array = ['PHP', "Js", 'Html'];
var array2 = ['PHP', "Js", 'Html'];

console.log(array[2])
console.log(typeof array.toString())
console.log(array.toString())
console.log(typeof array.join(" - "))
console.log(array.join(" - "))
console.log(typeof array.pop())
console.log(array.pop()) // Xoá phần tử cuối mảng và trả về phần tử vừa xoá
array.length
console.log(array.push('C++')) // thêm phần tử cuối mảng  trả về độ dài mảng


console.log(array.shift()) // Xoá phần tử đầu mảng và trả về phần tử vừa xoá

console.log(array.unshift('PHP')) // thêm phần tử đầu mảng trả về độ dài mảng

console.log(array.splice(0, 1, 'Js'))  // xoá phần tử trong mảng

console.log(array.concat(array2)) //Hợp nhất 2 array

console.log(array.slice(0, 1))


console.log(array)
