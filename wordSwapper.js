function findKeywords()
{
var sentecne = document.getElementById("sentence");
}


function replaceKeyword(word){
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
          "http://words.bighugelabs.com/9e144e42dacfd6413f3d7eb94aed5017"+word+"/",
          false);
  xhr.send();
}
//NEW IDEA: Send sentence to different method findKeywords(sentence),
//this will take each keyword and send to replaceKeyword(), which
//will use API to replace with random synonym, loop through sentence
