var inquirer= require('inquirer');
const { search, suggest, regex } = require('puzzy-search');

var  str = document.querySelector('#search');
var  btnSearch = document.querySelector('#btnSearch');
var  suggestion = document.querySelector('#didyoumean');
var  resultList = document.querySelector('#result');
str.addEventListener('input', () => {
    if (str.value)
        suggestion.innerHTML = `Did you mean: ${suggest(str.value)}`
    else
        suggestion.innerHTML = ''
});

btnSearch.addEventListener('click', () => {
    let  regex = regex(str.value)
    fetch('api.php?regex=' + regex)
        .then(res  =>  res.json()).then(data  => {
            resultList.innerHTML = data.map(r  =>  `<li>${r.sampleName}</li>`).join('')
        }).catch(e  =>  console.log(e))
});

inquirer();