// let fullName = "Customer A";
// let age = 20;
/**
 * Kieu du lieu (type)
 */
// Kieu du lieu co ban
let fullName = 'string';
let age = 20;
let isLogin = true;
let localStore = null;
let propertyName = undefined;
let nv = {
    ma: 1,
    hoTen: "Nhan Vien",
    luong: 1000
};
let result = 1;
let prod = { id: 1, name: "SP 1", price: 1000, img: "https://i.pravatar.cc/" };
let btn = {
    id: "btn1",
    className: "btn",
    innerHTML: "Click",
    gradient: "color"
};
class Phim {
}
// TYPE CUA FUNC
let tinhTong = (num1, num2) => {
    return num1 + num2;
};
tinhTong(1, 4);
let main = (callback) => {
    // truyen gia tri name va 1 ham callback
    callback("typescript"); // goi ham render
};
// ko co return
let showInfo = (name) => {
    console.log(`Hello ${name}`);
};
showInfo("name");
// Kieu cua mang
let arrNum = [1, 2, 34];
let arrString = ['a', 'b', 'c'];
