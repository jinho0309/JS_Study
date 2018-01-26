function Person(name){
  this.name = name;
}
Person.prototype.name=null;
Person.prototype.say="say";
Person.prototype.introduce=function(){
  alert("My Name is "+this.name);
}

function Programmer(){

}
Programmer.prototype=new Person();//Prototype반환
Programmer.prototype.coding=function(){
  alert("Hello world");
}
var p1 = new Programmer();
p1.coding();
p1.introduce();
alert(p1.say);
