function loadLanguage(){
var defaultLanguage = 'ua';   
var language = localStorage.getItem('language') || defaultLanguage;
    var $radio = document.querySelectorAll('#languages input[data-language="' + language + '"]');
    $radio.checked = true;
updateText(language);
}

function saveLanguage(language){
localStorage.setItem('language', language);
updateText(language);
}

function updateText(language){
    document.body.setAttribute('data-current-language',language);
 
    
}

document.querySelectorAll('#languages input[type="radio"]').forEach(function($radio){
  $radio.addEventListener('change', function(e){
  var language = e.target.getAttribute('data-language');
  updateText(language);
});
});


document.querySelector('#save').addEventListener('click', function(e){
e.preventDefault();
var language = document.querySelector('#languages input:checked').getAttribute('data-language');
saveLanguage(language);
})
addEventListener('load', loadLanguage);


