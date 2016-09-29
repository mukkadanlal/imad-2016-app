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
var nameInput = document.getElementById("name");
var name = nameInput.Value;
var submit = document.getElementById("submit-btn");
submit.onclick = function (){
    
  var names =[name1,name2,name3,name4]  ;
  var list="";
  for (var i=0;i<names.length;i++)
  {
      list ='<li>'+names[i]+'</li>';
  }
  var ul =document.getElementById('namelist');
  ul.innerHTML = list;
  };
    
