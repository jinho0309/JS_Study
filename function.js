function a(){}
a ={
  b:function(){
    alert("a.b");
  }

};
a.b();//함수도 값이기 때문에 a라는 함수에 값 대입가능.
  function test(){}
  test=function(){
    alert('test');
  };
  test();
