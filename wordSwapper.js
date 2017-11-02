function findKeywords(sentence)
{

  var notKeywords = ["for", "and", "nor", "but", "or", "yet", "so", "the", "my", "his",
   "her", "that", "we", "you", "I", "a", "me", "us", "it", "him", "is", "was", "to", "like", "with",
   "hers", "she", "he", "met", "they", "do", "did", "them", "mine", "ours", "yours", "herself",
   "myself", "himself", "yourself", "themselves", "yourselves", "who", "what","i", "where", "when"];
var endPunc="";
var keywords = {};
 var words =[];
var startWord =0;
for (var i = 0; i < sentence.length; i++) {
      if(sentence.indexOf(" ") == -1){ words[0] = sentence; break;}

if(sentence.charAt(i)== ' '){

words.push(sentence.substring(startWord, i));
startWord=i+1;
}
else if (i==sentence.length-1){
  if(sentence.charAt(sentence.length-1)=='.' ||
     sentence.charAt(sentence.length-1)==',' ||
     sentence.charAt(sentence.length-1)==';' ||
      sentence.charAt(sentence.length-1)=='?' ||
       sentence.charAt(sentence.length-1)=='!' ||
     sentence.charAt(sentence.length-1)==' '){
              words.push(sentence.substring(startWord, sentence.length-1));

              endPunc+=sentence.charAt(sentence.length-1);
            }
  else words.push(sentence.substring(startWord));
}
}
//find better way to store these words


for (var i = 0; i < words.length; i++) {
  let isKeyword = true;
words[i]= words[i].toLowerCase();
  for (var j = 0; j < notKeywords.length; j++) {
      if(words[i]==notKeywords[j]) isKeyword=false;
  }
  if(isKeyword)
      keywords[words[i]] = replaceKeyword(words[i]);
}
var newSentence = sentence;
for (var key in keywords){
newSentence=  newSentence.replace(key, keywords[key]);
}

document.getElementById("result").innerHTML = newSentence;
}




function replaceKeyword(word){
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
          "http://words.bighugelabs.com/api/2/9e144e42dacfd6413f3d7eb94aed5017/"+word+"/xml",
          false);
  if(xhr.status == 404) return word;
  xhr.send();
var synonyms = xhr.responseText;
var synList =[];

var location =0;
for(var i=0; i<synonyms.length;i++)
{
  if(synonyms.substring(i, i+3) == "syn")
    synList.push(synonyms.substring(i+5, synonyms.indexOf("<",i+5)));
}
var ans = synList[Math.floor(Math.random()*synList.length)];
if(ans=="undefined") return word;
return ans;

}
//NEW IDEA: Send sentence to different method findKeywords(sentence),
//this will take each keyword and send to replaceKeyword(), which
//will use API to replace with random synonym, loop through sentence
