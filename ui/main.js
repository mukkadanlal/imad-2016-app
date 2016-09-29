console.log('Loaded!');
/*var element = document.getElementById('lal');
element.innerHTML="New value loaded while loading the document";*/
var button = document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.open('GET','http://mukkadanlal.imad.hasura-app.io/counter',true);
    request.send();
    request.onreadystatechange = function (){
        if (request.readyState=== XMLHttpRequest.DONE){
            if(request.status===200){
            var counter = request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter;
            }
        }
    };
};

var submit = document.getElementById("submit-btn");
submit.onclick = function (){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function (){
        if (request.readyState=== XMLHttpRequest.DONE){
            if(request.status===200){
            var names =request.responseText;
            names = JSON.parse(names);
              var list=``;
              for (var i=0;i<names.length;i++)
              {
                  list +='<li>'+names[i]+'</li>';
              }
              var ul =document.getElementById('namelist');
              ul.innerHTML = list;
            }
        }
    };  
    var nameInput = document.getElementById("name");
    var name = nameInput.Value;
    request.open('GET','http://mukkadanlal.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send();
  };
    
