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


document.getElementById('navitems').style.left = '0' ;

document.getElementById('navitems').style.transition = 'all 0.3s ease';

document.getElementById("closehide").style.display = 'inline-block';
document.getElementById("closehide").style.transition = '3s';



}





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
}
}
