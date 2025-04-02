// js with server/10_class.js

//1) 생성자 함수
function User(name, age, city){
  // 필드
  this.name = name;
  this.age = age;
  this.city = city;
  // 메서드
  this.getInfo = function(){
    return `${this.name}, ${this.age}, ${this.city}`;
  }
}

let hong = new User('Hong', 30, 'Daegu');
console.log(hong.getInfo());

let kim = new User("Kim", 25, "Jeju");
console.log(kim.getInfo());

// class
class Emp {
  // 생성자
  constructor(id, name, dept){
    // 해당 클래스가 가지는 필드 등록
    this._id = id;
    this._name = name;
    this._dept = dept;
  }

  // get & set
  get id(){    
    return this._id;
  }

  set name(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  // 메서드
  setDept(dept){
    this._dept = dept;
  }

  getDept(){
    return this._dept;
  }
}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200;
kang.name = 'King';
kang.setDept('Marketing');
console.log(kang);