// let fullName = "Customer A";
// let age = 20;

/**
 * Kieu du lieu (type)
 */

// Kieu du lieu co ban
let fullName: string = 'string';
let age:number = 20;

let isLogin: boolean = true;
let localStore: null = null;
let propertyName: undefined = undefined;

// Tham chieu: object, array, function4
//? Object
// Class


//  Type: dinh nghia kieu du lieu cho doi tuong
type Employee = {
    ma: number,
    hoTen:string,
    luong:number,
    moTa?:string //? optional prop
}

let nv:Employee = {
    ma:1,
    hoTen: "Nhan Vien",
    luong: 1000
}

// union type
type responeBE = string | number | boolean | undefined;
let result:responeBE = 1;

/**
 * interface gan giong type
 */

interface Product{
    id:number | string,
    name: string,
    price: number,
    img: string
}

// gop interface
// chi dung de khai bao cac thuoc tinh optional
interface Product{
    moTa?: string
}

let prod: Product = {id: 1, name: "SP 1", price: 1000, img: "https://i.pravatar.cc/"}

//? Ke thua interface
interface Button{
    id: number | string,
    className: string,
    innerHTML: string

}
interface ButtonGradient extends Button{
    gradient: string 
}

let btn: ButtonGradient ={
    id:"btn1",
    className:"btn",
    innerHTML: "Click",
    gradient:"color"
}

// Quy dinh kieu du lieu cho class
// CRUD
// any: khong co kieu du lieu (dien kieu du lieu nao cho bien cung duoc)
interface CRUD{
    // phuong thuc
    create,
    update,
    read,
    delete 

}

class Phim implements CRUD{
    create: any,
    update: any;
    read: any;
    delete: any;
}

// TYPE CUA FUNC
let tinhTong = (num1:number, num2: number) : number => {
    return num1 + num2;
}
tinhTong(1,4);

let main = (callback: (name:string) => void) => {
    // truyen gia tri name va 1 ham callback
    callback("typescript"); // goi ham render
}
// ko co return
let showInfo = (name: string): void => {
    console.log(`Hello ${name}`);

}
showInfo("name");

// Kieu cua mang
let arrNum:number[] = [1,2,34];
let arrString:string[] = ['a','b','c'];
