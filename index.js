// alert("sagar");


// myfunction( ) {
//   alert("sagar");
// }




// function myFunction(){
//
//   // alert("sagar3");
//
//
//   // document.getElementById('navitems').style.color = 'green';
//   document.getElementById("navitems").style.color = "blue";
// }








function myFunction() {
if(document.getElementById("my-checkbox").checked){
  document.getElementById('bar1').style.transform = 'rotate(0deg)' ;
  document.getElementById('bar1').style.top = '20px' ;
  document.getElementById('bar1').style.left = '20px' ;
  document.getElementById('bar2').style.transform = 'rotate(0deg)' ;
  document.getElementById('bar2').style.top = '30px' ;
  document.getElementById('bar2').style.left = '20px' ;
    document.getElementById('navitems').style.left = '-500%' ;
        document.getElementById('bar1').style.backgroundColor = 'black' ;
            document.getElementById('bar2').style.backgroundColor = 'black' ;
document.getElementById('cart').style.opacity = '1';
 document.getElementById('cart').style.transition = '0.1s ';


}

else{

  document.getElementById('bar1').style.transform = 'rotate(45deg)' ;
  document.getElementById('bar1').style.top = '22px' ;
  document.getElementById('bar1').style.left = '20px' ;
    document.getElementById('bar1').style.backgroundColor = 'white' ;
  document.getElementById('bar2').style.transform = 'rotate(-45deg)' ;
    document.getElementById('bar2').style.backgroundColor = 'white' ;
  document.getElementById('bar2').style.top = '22px' ;
  document.getElementById('bar2').style.left = '20px' ;
  document.getElementById('navitems').style.left = '0' ;

  document.getElementById('navitems').style.transition = 'all 0.3s ease';

       document.getElementById('cart').style.transition = '0.8s ';
    document.getElementById('cart').style.opacity = '0';
}
}







// const box = document.getElementById('navitems');
//
// // 👇️ Change text color on mouseover
// box.addEventListener('mouseover', function handleMouseOver() {
//   box.style.color = 'red';
// });
//
// // 👇️ Change text color back on mouseout
// box.addEventListener('mouseout', function handleMouseOut() {
//   box.style.color = 'black';
// });

function change() {
   const box = document.getElementById('upcome');
   box.style.color = "red";
   box.style.top="390px";
}
