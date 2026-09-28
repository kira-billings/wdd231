

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('name'));

console.log(myInfo.get('email'));
console.log(myInfo.get('recipeName'));
console.log(myInfo.get('ingredients'));
console.log(myInfo.get('instructions'));
console.log(myInfo.get('notes'));
console.log(myInfo.get('date'));

document.querySelector('#results').innerHTML = `
    
<p>From: ${myInfo.get('name')}</p>
<p>Email: ${myInfo.get('email')}</p>
    <p>Recipe Name: ${myInfo.get('recipeName')}<p/>
    
    <p>Ingredients: ${myInfo.get('ingredients')}</p>
    <p>Instructions: ${myInfo.get('instructions')}</p>
    <p>Notes: ${myInfo.get('notes')}</p>
    <p>Date: ${myInfo.get('timestamp2')}</p>
    `