var a =5;
function print(){
  var a =3
  alert(a);
}
for(var i=0;i<5;i++)
  alert("for문 "+i);

alert(a);
print();
alert("for 문 밖 "+i);//for문에서 설정한 i도 전역변수가 된다.
