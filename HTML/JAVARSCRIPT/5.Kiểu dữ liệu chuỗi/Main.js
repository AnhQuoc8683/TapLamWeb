var lastName = "Anh \"Quoc\"";
var fistsName = "Nguyen Khac"
var fullName = fistsName + " " + lastName;
//console.log(` ${fistsName} ${lastName}`)
//console.log(fullName);

var myString = "Nguyen Khac Anh Quoc - Nguyen Khac Anh Quoc";
//1. Length
 console.log(myString.length);
//2. Find index 
 console.log(myString.indexOf("n", 6));
//3. Cut string
console.log(myString.slice(16, 20))
//4. Replace
console.log(myString.replace(/Nguyen Khac Anh Quoc/g, "Nguyễn Khắc Anh Quốc"))
//5. Convert to upper case and lower case
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())
//6. Trim
console.log(myString.trim());
//8. Split
console.log(myString.split(" "))
//9. get a character by index
console.log(myString.charAt(7))



