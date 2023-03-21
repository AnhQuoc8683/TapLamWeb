function run(a) {
    if(a % 3 === 0 && a % 5 !== 0){
        return 1
    }else if (a % 5 === 0 && a % 3 !== 0 ){
        return 2
    }else if (a % 15 === 0){
        return 3
    }
}


switch (fruits) {
    case "Banana":
        result = "This is a Banana";
        break;
    case "Apple":
        result = "This is an Apple";
        break;
}

// Làm bài
function getCanVoteMessage(age) {
    return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu"
}



// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'