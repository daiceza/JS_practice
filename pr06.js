var animals = [
  {'name':'パンダ','weight': 80},
  {'name':'ライオン','weight': 200},
  {'name':'キリン','weight': 300}
];
var answer = prompt('パンダ,ライオン,キリンから選んで下さい')
switch (answer) {
  case 'パンダ':
    alert(animals[0].weight +'Kg');
    break;
  case 'ライオン':
    alert(animals[1].weight +'Kg');
    break;
  case 'キリン':
    alert(animals[2].weight +'Kg');
    break;
  default:
    alert('体重が表示されます');
    break;
}
