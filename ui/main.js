console.log('Loaded!');
/*var element = document.getElementById('lal');
element.innerHTML="New value loaded while loading the document";*/
var button = document.getElementById("counter");
button.onClick(function(){
    var request = new XMLHttpRequest();
    request.open('GET','http://mukkadanlal.imad.hasura-app.io/counter',true);
    request.send();
    request.onreadystatechange = function (){
        if (request.readyState=== XMLHttpRequest.Done){
            if(request.status===200){
            var counter = request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter;
            }
        }
    };
});