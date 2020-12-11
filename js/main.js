

 console.dir(window.location)
 var url = window.location.href;
 console.dir(url.split('/'));
 var url = window.location.href;
 var filename = url.split('/').pop();

 document.getElementById('myHeading').innerHTML = "Soraya";

    var allLinks = document.querySelectorAll('nav ul li');


   document.querySelector(".red").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class', "redBack");
    })

    document.querySelector(".blue").addEventListener('click', function(ev){
       document.querySelector('body').setAttribute('class', "blueBack");
    })

    document.querySelector(".green").addEventListener('click', function(ev){
       document.querySelector('body').setAttribute('class', "greenBack");
    })

    document.querySelector(".reset").addEventListener('click', function(ev){
      document.querySelector('body').removeAttribute('class');
    })

    /* if(filename === "index.html"){
      var colourButtons = document.querySelectorAll(".colPicker")
      console.dir(colourButtons)

      for(var i=0; i < colourButtons.length; i++){
        colourButtons[i].addEventListener("click", chgColour)
      }
    
   
      //change colour function 
      function chgColour(ev){
        console.dir(ev.target.classList)
        console.dir(ev.target.classList[0])
        var colourPicked = ev.target.classList[0] + "Back"
        var bodyElement = document.querySelector('body')
        if(colourPicked === "resetBack"){
              bodyElement.removeAttribute('class')
          }else{
              bodyElement.setAttribute('class', colourPicked)
          }
      } */
    
   
   
   
   
    //Creating an Array of images
    var imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg',
    'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];

    var counter = 0; 

    if(document.getElementById('myImages')){
      document.getElementById('myImages').setAttribute('src', imageAr[counter]);
    }  

    //Image changes automatically depending on the speed given 
    setInterval(chgImage, 2000);  

    /*to change image manually
    document.getElementById('myImages').addEventListener('click', chgImage);*/
  
    function chgImage(){
      counter++
      if (counter == imageAr.length){
          counter = 0;
      }

      document.getElementById('myImages').setAttribute('src', imageAr[counter]);
    }
  
  
  
    
  

    