function Person(name){
  this.name = name;
  this.introduce = function(){
    console.log(name+"입니다.");
  }
}
var p1 = new Person('jinho');
p1.introduce();
var p2= new Person('SJ');
p2.introduce();
