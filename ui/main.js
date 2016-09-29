console.log('Loaded!');
/*var element = document.getElementById('lal');
element.innerHTML="New value loaded while loading the document";*/
var button = document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if (request.readyState=== XMLHttpRequest.DONE){
            if(request.status===200){
            var counter = request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://mukkadanlal.imad.hasura-app.io/counter',true);
    request.send();
};