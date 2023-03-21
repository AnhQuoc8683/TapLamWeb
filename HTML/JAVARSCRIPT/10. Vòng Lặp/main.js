var a = 1

for(var i = 0 ; i <= a ;i++){
    console.log(i)
}
 


function getRandNumbers(min, max, length){
    var array = [];
    for(var i = 0 ; i < length ;i++){
        var random = Math.floor(Math.random()*(max-min)+min);
        array.push(random)
    }
    return console.log(array)
}
//getRandNumbers(3, 15, 60)


function getTotal(arr) {
    var total = 0
    for(var i=0; i < arr.length ; i++){
        total += arr[i]
    }
    return console.log(total)
}

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
 function getTotal(orders){
    var orderslength = orders.length
    var total = 0
     for(var i = 0; i < orderslength; i++){
        total += orders[i].price
     }

     return total
 }


 function getTotal2(orders){
    var total = 0
    for(var key in orders){
        total +=  orders[key].price
    }
 return total
}

function getTotal3(orders){
    var total = 0
    for(var value of Object.keys(orders)){
        total +=  orders[value].price
    }
 return total
}

function run(object) {
    var array = []
    for( var key in object){
        array.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return array
}

var i = 1;

while (i <= 2){
    console.log(i)
    i++
}

do{
    console.log("anh quoc")
    i++
}while( i <= 6 )

