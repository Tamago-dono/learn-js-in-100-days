// return trong ham`

function cong(a, b) {
    return a + b ;
}

var result = cong(5, 9);

console.log(result)

// khai bao bien trong ham`
function showMessage() {
    var fullName = 'Bui Tu Linh';
    console.log(fullName)
}

showMessage()

//Expression function

var showMessage = function() {

}

setTimeout(function() {

});

var myObject = {
    myFunction: function() {
        
    }
}

//Chuỗi trong js
var fullName ='Linh Tu Bui';
console.log(fullName);
console.log(fullName.length);//xem độ dài của chuỗi

// Template String

var firstName = 'Bui';
var lastName = 'Linh';


console.log(`Toi la : ${firstName} ${lastName}`)

//Find index
var myString = 'Hoc JS tai JS JS hs JS';
console.log(myString.indexOf('JS'));// tìm vị trí của chuỗi
console.log(myString.lastIndexOf('JS'))

//Cut string

var myString2 = 'Hoc JS taij H8!';
console.log(myString2.slice(4, 6))// cắt 'js' trong chuỗi ra từ trái sang phải

console.log(myString.replace('JS','Javascript'));//Thaychữ JS đầu tiên nhìn thấy thành Javasrpipt
console.log(myString.replace(/JS/g, 'Javascript'));//Thay tất cả chữu JS

//Convert to upper/lower case - Viết hoa tất cả/ viết thường

console.log(myString.toUpperCase());
console.log(myString.toLowerCase())

//Trim - loại bỏ khoảng trắng thừa ở 2 đầu

console.log(myString.trim());

//Split - Cắt 1 chuỗi thành Array

var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(', '));

//Get a character by index - từ một chuỗi cho trước lấy ra phần tử được chỉ định

console.log(languages.charAt(5))

//Number
var age = 18;
var PI = 3.145324234
var otherNumber = new Number(9);

//to string - Chuyển thành kiểu dữ liệu String
console.log(age.toString())
//to fixed - Làm tròn số
console.log(PI.toFixed())


//polyfill ?

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) {start = 0;}
        return this.indexOf(search, start) !== -1;
    };
}

'Javascript not control'.includes('Javascript', 0);


//Mảng trong JS
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];

console.log(languages);
console.log(Array.isArray(languages))// Kiểm tra xem có phải mảng không

//Làm viẹc với Array
//To String

console.log(languages.toString());

//join

console.log(languages.join(' ')); //thay thế , giữa các  phần tử

//pop

// console.log(languages.pop())
// xóa các phần tử cuối mảng và trả về phần tử đã xóa


//Shift- xóa phần tử đầu mảng và trả về phần tử đã xóa

//Push 
console.log(languages.push('Dart')); //Thêm phần tử vào cuối mảng và trả về số phần tử

//Unshift //thêm phần tử vào đầu mảng và trả về số phần tử

/*
Splicing:
    1- nơi đặt con trỏ
    2- số lượng element muốn xoá
    3- những element muốn truyền vào
    */

    languages.splice(1, 0, 'C#')
console.log(languages);

//concat - Hợp nhất 2 mảng lại

var languages2 = [
    'Dart',
    'Ruby'
];


console.log(languages.concat(languages2));

//slicing- Cắt 1 vài element

console.log(languages.slice(1, 2))

//Object trong js;

var emailKey = 'email';


var myInfo = {
    name: 'Bui Tu Linh',
    age: 18,
    address: 'Ha Nam, Ninh Binh',
    [emailKey]: 'linhtubui',
    getName: function() {
        return this.name;
    }
}

//Function --> Phương Thức / method
// others --> Thuộc tính / property


//Thêm key value vào trong object đã được khởi tạo.
myInfo.email = 'linhtubui16082004@gmail.com'

delete myInfo.age

console.log(myInfo.getName());

//object constructor - Xây dựng đối tượng -->chưa hiểu
//object prototype - cấu thành nên đối tượng của hàm tạo

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// 
User.prototype.className = 'DCCTCT-67';
User.prototype.getClassName = function() {
    return this.className;
}

var author = new User('Bui', 'Linh', 'Avatar');
var user = new User('Do', 'Trang', 'avatar');

    //thêm thuộc tính, phương thức vào trong object

author.title = 'Vo dich no tung dac thang thu';
user.comment = 'may chang la cai gi ca ?';

console.log(author);
console.log(user.getName());




//Đối tượng Date
var date = new Date();

var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(date.getFullYear())

console.log(`${seconds}/${minutes}/${hours}/${day}/${month}/${year}`)


//Câu lệnh rẽ nhánh - If Else
//Sử dụng khi có 3 trường hợp hoặc có < > !==

var date = 4;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
}

else if (date === 3) {
    console.log('Hôm nay là thứ 3');
}

else if (date === 4) {
    console.log('Hôm nay là thứ 4');
}

else {
    console.log('khong biet')
}

//Câu lệnh rẽ nhánh -Switch
// sử dụng khi biết trước giá trị nhưng số case phải lớn 3 
var date = 6;

switch(date) {
    case 2:
        console.log('Hom nay la thu 2');
        break;
    case 3:
        console.log('Hom nay la thu 3');
        break;
    case 4:
        console.log('Hom nay la thu 4');
        break;
    case 5:
        console.log('Hom nay la thu 5');
        break;
    default:
        console.log('khong biet');
}