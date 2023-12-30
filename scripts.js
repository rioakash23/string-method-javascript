                //  string-lenght method  
               
// let text = "THE TREES ARE THE NATURE. GIFTS OF THE NATURES." ;
// document.getElementById ("demo") .innerHTML=text.length; 

               //    string slice method 

// let text = "apple, orange, banana";
// let part = text.slice (7,13);
// document.getElementById("demo").innerHTML = part;


              //  Dates function-methods  

// const d = new Date();
// document.getElementById("demo").innerHTML = d;


             //  string content-methods

function myFunction7() { 
        let text = document.getElementById("demo6").innerHTML;
        document.getElementById("demo6").innerHTML =
        text.replace("Microsoft","W3Schools");
      }

           //   alert -messages

function myFunction2() { 
        alert("Hello,Welcome to javascript  !"); } 
// 


        // let text = "I love cats. Cats are very easy to love. Cats are very popular." 
        
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");

// document.getElementById("demo").innerHTML = text;  

var a=10 
        var b=20
        var c=a+b

function myFunction(){

        document.getElementById('demo').innerHTML=c;
     }

     // string length method

     let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     function myFunction3() {
     document.getElementById("demo2").innerHTML = text.length;
 }

     // string slice method

   let texts = "Apple, Banana, Kiwi";
function myFunction4() {
  let part = text.slice(7,13);
   document.getElementById("demo3").innerHTML = part; }


    //    substring

    let str = "Apple, Banana, Kiwi";
    function myFunction5() {
document.getElementById("demo4").innerHTML = str.substring(7,13);}


     // substr

     let substr = "Apple, Banana, Kiwi";
     function myFunction6(){
document.getElementById("demo5").innerHTML = str.substr(7,6);}


// 

// uppercase method


function myFunction9() {
        let text = document.getElementById("demo8").innerHTML;
        document.getElementById("demo8").innerHTML =
        text.toUpperCase();
      }


//  loer method


function myFunction10() {
  let text = document.getElementById("demo9").innerHTML;
  document.getElementById("demo9").innerHTML =
  text.toLowerCase();
}

// string concat

function myFunction11(){
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
document.getElementById("demo").innerHTML = text3;}



//trimstart 
function trimstart(){
        let text1 = "     Hello World!     ";
        let text2 = text1.trimStart();
        
        document.getElementById("demo11").innerHTML =
        "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
        }
        
        //trimend
        function trimend (){
        let text1 = "     Hello World!    ";
        let text2 = text1.trimEnd();
        
        document.getElementById("demo12").innerHTML =
        "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
        }
        
        
        //padstart
        function padstart() {
          let text = "5";
          text = text.padStart(4,"0");
          document.getElementById("demo13").innerHTML = text;
        }
        
        //padend
        function padend() {
          let text = "5";
        text = text.padEnd(4,"0");
        document.getElementById("demo14").innerHTML = text;
        }
        
        //charat
        function charat() {
          var text = "HELLO WORLD";
        document.getElementById("demo15").innerHTML = text.charAt(0);
        }
        
        //charCodeAt
        function charCodeAt () {
          let text = "HELLO WORLD";
        document.getElementById("demo16").innerHTML = text.charCodeAt(0);
        }
        
        //split
        function split() {
          let text = "a,b,c,d,e,f";
        const myArray = text.split(",");
        document.getElementById("demo17").innerHTML = myArray[0];
        }