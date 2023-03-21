function showDialog(Message){
    alert(Message);
}
showDialog("Hi Anh Quốc");
// --------------------------------------------------
var sTring = ['Toán', 'Văn', 'Anh'];
function VongLap(){
    var myString = '';
    for (var param of arguments){
        myString += param;
    }
    console.log(myString);
}
// --------------------------------------------------
// var isconfirm = confirm('Đúng Ok sau Huỷ');
// --------------------------------------------------
function mayTinhbotui(a, b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    if( b == 0){
        console.log('Không thể chia hết cho 0');
    }else{
        console.log(a / b);
    }
}
// --------------------------------------------------

