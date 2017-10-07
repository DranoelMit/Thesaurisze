function findKeywords(sentence)
{


 var words =[];
var startWord =0;
for (var i = 0; i < sentence.length; i++) {
      if(sentence.indexOf(" ") == -1){ words[0] = sentence; break;}

if(sentence.charAt(i)== ' '){
words.push(sentence.substring(startWord, i));
startWord=i+1;
}

else if (i==sentence.length-1)
  words.push(sentence.substring(startWord));
}



for (var i = 0; i < words.length; i++) {

}

}



function replaceKeyword(word){
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
          "http://words.bighugelabs.com/api/2/9e144e42dacfd6413f3d7eb94aed5017"+word+"/xml",
          false);
  xhr.send();
}
//NEW IDEA: Send sentence to different method findKeywords(sentence),
//this will take each keyword and send to replaceKeyword(), which
//will use API to replace with random synonym, loop through sentence
