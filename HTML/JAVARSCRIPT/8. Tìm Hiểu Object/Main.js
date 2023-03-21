
var email = "email";

var myInfo = {
    name: "Anh Quoc",
    age: 21,
    addRess: "Nghe An",
    [email] : "Anhquoc@gmail.com",
    getFullinformation : function(){
        return this.name + " - " + this.age + " - " + 
        this.addRess + " - " + this.email + " - " + this.Sdt
    }
}
 
myInfo.Sdt = '0799339567';
delete myInfo.Sdt
// function --> Phương thức / method
// Others ---> Thuộc Tính / property


// Obiect constructor 
function User(firstName, lastName,  datetime) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.datetime = datetime
}
User.prototype.Sdt = '0799339567'
var anhQuoc = new User('Nguyen', 'Quoc', '20/09/2002')

console.log(anhQuoc)
// Obiect prototype 


//Đối tượng Date
var date = new Date()

var day = date.getDate()
var month = date.getMonth() + 1
var year = date.getFullYear()
var getToday = `${day}/${month}/${year}`
console.log(getToday)
//Math object
function getRandomItem(array){
    var num = array.length - 1;
         var random = Math.floor(Math.random()*num);

         return console.log(array[random])
}
var array = [3, 4 ,7, 8,9,45,67,89]

getRandomItem()