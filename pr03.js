var animals = ['パンダ','ライオン','キリン'];
var answer = prompt('パンダ,ライオン,キリンから選んで下さい')
var i=0;
while(true){
  if (i>= animals.length){
    break;
  }else if(answer == "ライオン"){
    alert(animals[1]);
    break;
  }
  alert(animals[i]);
  i++;
}
