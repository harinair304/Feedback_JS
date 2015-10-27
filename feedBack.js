  var div, overlayDiv, x1 = 0, y1 = 0, x2 = 0, y2 = 0;
      var rect = null; 
      var elements = null;
      var clickedf = true;
      var downfor = 500; 
      var clickif;

// $(document).ready(function () 

function initFeedback(e)
//$(document).ready(function () 
{
    //console.log("INIT INSIDE");
    //Won't be this easy. Has to be made dynamic, but hould serve as a POC
    //div =  document.getElementById('div');
   // overlayDiv = document.getElementById('overlayDiv');
   
    div = document.createElement('div');
    
    div.hidden = true;
    div.className='div';
   document.getElementsByTagName('body')[0].appendChild(div);


    window.addEventListener('mousedown',clicked);
    window.addEventListener('mousemove',moveAround);
    window.addEventListener('mouseup',released);


    var button = document.getElementsByClassName("button");

  console.log(button);

    for(var i=0;i<button.length;i++){
        button[i].addEventListener('click', test);
    }
   





    // x1 = div.x1;
    // y1= div.y1;
    // x2= div.x2;
    // y2 = div.y2;

    //console.dir(div);
    // div =  document.getElementById('div');
    // $("document").on('mousedown',clicked);
    //  $("document").on('mousemove',moveAround);
    //   $("document").on('mouseup',released);


     
     
}
// )
  


// function  identifyClick()
// {
//     console.log("This is a drag");
//     clickedf = false;
// }


function closeBox(e)
{
    e.preventDefault();
   console.log("INSIDE CLOSE BUTTON" + $(this).parent());
   $(this).parent().remove();
}  

function reCalibrate() {

    ////console.log("ReCalculate");
    var x3 = Math.min(x1,x2);
    var x4 = Math.max(x1,x2);
    var y3 = Math.min(y1,y2);
    var y4 = Math.max(y1,y2);
    div.style.left = x3 + 'px';
    div.style.top = y3 + 'px';
    div.style.width = x4 - x3 + 'px';
    div.style.height = y4 - y3 + 'px';
    
    



//     if(rect!=null)
//     {        
//     rect.style.left = x3 + 'px';
//     rect.style.top = y3 + 'px';
//     rect.style.width = x4 - x3 + 'px';
//     rect.style.height = y4 - y3 + 'px';
// }


   

}
//onmousedown = function(e) 





function clicked(e){
    if(e.which==3){
    e.preventDefault();
    console.log(e.which);
   // clickif =  setTimeout(identifyClick,1000);
   console.log("CILICKEDIF IS "+clickedf);
 ////console.log("DIV IS Currently "+div.hidden);
  // if(!clickedf) {
 console.log("DIV CLICKED "+" "+e.clientX+" "+e.clientY+" "+clickif);

      div.hidden =false;
      

     //overlayDiv.hidden = false;
    //console.log("DIV IS Currently "+div.hidden);
    x1 = e.clientX+window.pageXOffset;
    y1 = e.clientY+window.pageYOffset;

    rect=document.createElement('div');
   
    // rect.style.left = x1+'px';
    // rect.style.top =  y1+'px';
    // div.appendChild(rect);

    div.style.cursor = 'crosshair';

    reCalibrate();

// }

    }

} 


function moveAround(e) {
    ////console.log("DIV MOVED"+e.clientX);
    // if(!clickedf){
       {
    x2 = e.clientX+window.pageXOffset;
    y2 = e.clientY+window.pageYOffset;

    
    reCalibrate();
}
    // }
};
function released(e) {
    //rect=null;
    
    if(e.which==3)
    {
    e.preventDefault();
    // clearTimeout(clickif);
    // if(!clickedf)
    // {    
    rect = div.cloneNode(true);
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
     rect.className = 'rectangle';
    rect.id=uniqid;

    cb = document.createElement('div');
    cb.className = 'closeButton';
    cb.text='X';
    rect.appendChild(cb);


   


   // //console.log(rect);
    document.body.appendChild(rect);
    div.style.cursor="default";
    console.log("DIV released"+" "+e.clientX+" "+e.clientY+" "+clickedf);
    div.hidden = true;
    ////console.log("DIV IS Currently "+div.hidden);

     $('.closeButton').click(closeBox);

   $('.rectangle').hover( function () {
        $(this).find('.closeButton').show();
    }, function () {
    $(this).find('.closeButton').hide();
}
    );



    //Code to capture elements inside rectangle

    var x3 = Math.min(x1,x2);
    var x4 = Math.max(x1,x2);
    var y3 = Math.min(y1,y2);
    var y4 = Math.max(y1,y2);

    //console.log("Enterirng find elements");
    //console.log(x1,y1, x4-x3 ,y4-y3);
  var elements = rectangleSelect(x1-window.pageXOffset, y1-window.pageYOffset, x4-x3 ,y4-y3);

  console.log("AND THE DIV IS: ");
   console.log(elements);
 }
//  var canvas =  html2canvas(document.body, {
//   onrendered: function(canvas) {
//    window.open(canvas.toDataURL());
//   }



// });


 

  
  // alert(elements.toString());
  
  // }

  // else 
  // {
  //   div.hidden=true;
  //   console.log("THIS IS A CLICK "+clickedf);
    

  // }  
  // //clickif=true;
  // clickedf=true;


}

 
 function rectangleSelect(x, y, width, height) {
    document.body.removeChild(rect);

    //console.log("INITIALPARAMS ARE: "+x,y,width,height);
    var elements = [];
     var   largeNumber = +new Date;
       var cx = x;
        var cy = y;
     var     currElement;
 //console.log("Inside Fun First "+cx,cy,height,width);
    height = y + height;
    width = x + width;
    
     //console.log("Inside Fun "+cx,cy,height,width);

    while ((cy += 10) < height) {
        cx = x;
        while (cx < width) {
            currElement = document.elementFromPoint(cx, cy);
            if ( currElement && !currElement[largeNumber] ) {
                currElement[largeNumber] = new Number(0);
               // //console.log("INSIDE if curlr"+currElement[largeNumber]);
                elements.push(currElement);
                cx += currElement.offsetWidth;
            } else {
                cx += 10;
            }
        }
    }
    document.body.appendChild(rect);
    return elements;

}


function test()
{

 // console.log("BUTTON!!");
    var canvas =  html2canvas(document.body, {
  onrendered: function(canvas) {
   window.open(canvas.toDataURL());
  }



});


}

function endFeedback()
{

   $('.rectangle').remove();
   $('.div').remove();
  window.removeEventListener('mousedown',clicked);
    window.removeEventListener('mousemove',moveAround);
    window.removeEventListener('mouseup',released);

   


}


// function screenshotPage() {
// //alert ("Sample");
// //alert( document.documentElement.nodeName);

//  urlsToAbsolute(document.images);
//  urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));
//  urlsToAbsolute(document.scripts);


//  console.log(document.images);
//  console.log(document.querySelectorAll("link[rel='stylesheet']"));
//  console.log(document.scripts);




//  var screenshot = document.documentElement.cloneNode(true);


//  screenshot.style.pointerEvents = 'none';
//  screenshot.style.overflow = 'hidden';
//  screenshot.style.userSelect = 'none'; 
//  screenshot.style.webkitUserSelect = 'none';
//  screenshot.style.mozUserSelect = 'none';
//  screenshot.style.msUserSelect = 'none';
//  screenshot.style.oUserSelect = 'none';
//  screenshot.dataset.scrollX = window.scrollX;
//  screenshot.dataset.scrollY = window.scrollY;
//  var script = document.createElement('script');
//  script.textContent = '(' + addOnPageLoad_.toString() + ')();';
//  console.log("SCRIPT CONTENt IS S" + script.textContent);
//  screenshot.querySelector('body').appendChild(script);
//  var blob = new Blob([screenshot.outterHTML], {type: 'text/html'});


//  console.log("BLAH BLAH BLAH" );
//  console.dir(screenshot);

//  return blob;
// /*
// var image = document.createElement('image');
//     image.src = 'data:image/png;base64,'+Base64.encode(blob);
//     document.body.appendChild(image);
// */  
// //  var image = document.createElement('img');
//   //  image.src = URL.createObjectURL(blob);
// //  image.src="http://static.adzerk.net/Advertisers/7b03b9d327834757b98b657002b37789.png";
//   //  document.body.appendChild(image);
  
//  //window.open(window.URL.createObjectURL(image);
  
 
// // console.log(createObjectURI(blob));


// // window.URL.createObjectURL(blob);
 
  
// }

// function urlsToAbsolute(nodeList) {
//        if (!nodeList.length) {
//            return [];
//        }
//        var attrName = 'href';
//       // console.log("urlsToAbsolute: "+nodeList[0].__proto__);
//       // console.log("urlsToAbsolute: "+HTMLImageElement.prototype);

//        if (nodeList[0].__proto__ === HTMLImageElement.prototype || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
//            attrName = 'src';
//        }
//        nodeList = [].map.call(nodeList, function (el, i) {
//            var attr = el.getAttribute(attrName);
//             console.log("urlsToAbsolute: " + el + " " + attr);
//            if (!attr) {
//                return;
//            }
//            var absURL = /^(https?|data):/i.test("https");
//            console.log(absURL);
//            if (absURL) {
//                return el;
//            } else {
//                return el;
//            }
//        });
//        return nodeList;
//    }






//  function addOnPageLoad_() {
//         window.addEventListener('DOMContentLoaded', function (e) {
//             var scrollX = document.documentElement.dataset.scrollX || 0;
//             var scrollY = document.documentElement.dataset.scrollY || 0;
//             window.scrollTo(scrollX, scrollY);
//         });
//     }

//     function generate() {
//       console.log("INSIDE GENERATE");
//         window.URL = window.URL || window.webkitURL;
//         window.open(window.URL.createObjectURL(screenshotPage()));
//     }

(function (exports) {
    function urlsToAbsolute(nodeList) {
        if (!nodeList.length) {
            return [];
        }
        var attrName = 'href';
        if (nodeList[0].__proto__ === HTMLImageElement.prototype || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
            attrName = 'src';
        }
        nodeList = [].map.call(nodeList, function (el, i) {
            var attr = el.getAttribute(attrName);
            if (!attr) {
                return;
            }
            var absURL = /^(https?|data):/i.test(attr);
            if (absURL) {
                return el;
                console.log(el);
            } else {
                console.log(el);
                return el;
            }
        });
        return nodeList;
    }

    function screenshotPage() {
        urlsToAbsolute(document.images);
        urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));
        var screenshot = document.documentElement.cloneNode(true);
        var b = document.createElement('base');
        b.href = document.location.protocol + '//' + location.host;
        var head = screenshot.querySelector('head');
        head.insertBefore(b, head.firstChild);
        screenshot.style.pointerEvents = 'none';
        screenshot.style.overflow = 'hidden';
        screenshot.style.webkitUserSelect = 'none';
        screenshot.style.mozUserSelect = 'none';
        screenshot.style.msUserSelect = 'none';
        screenshot.style.oUserSelect = 'none';
        screenshot.style.userSelect = 'none';
        screenshot.dataset.scrollX = window.scrollX;
        screenshot.dataset.scrollY = window.scrollY;
        var script = document.createElement('script');
        script.textContent = '(' + addOnPageLoad_.toString() + ')();';
        screenshot.querySelector('body').appendChild(script);
        var blob = new Blob([screenshot.outerHTML], {
            type: 'text/html'
        });
        return blob;
    }

    function addOnPageLoad_() {
        window.addEventListener('DOMContentLoaded', function (e) {
            var scrollX = document.documentElement.dataset.scrollX || 0;
            var scrollY = document.documentElement.dataset.scrollY || 0;
            window.scrollTo(scrollX, scrollY);
        });
    }

    function generate() {
        window.URL = window.URL || window.webkitURL;
        console.log("Window URL: "+window.URL);
        window.open(window.URL.createObjectURL(screenshotPage()));
    }
    exports.screenshotPage = screenshotPage;
    exports.generate = generate;
})(window);

