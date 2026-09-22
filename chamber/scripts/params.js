

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('title'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('businessName'));
console.log(myInfo.get('businessDescription'));
console.log(myInfo.get('level'));
console.log(myInfo.get('date'));

document.querySelector('#results').innerHTML = `
    <p>You submitted:</p>
    <p>${myInfo.get('fname')} ${myInfo.get('lname')}, ${myInfo.get('orgTitle')}<p/>
    <p>${myInfo.get('email')}</p>
    <p>${myInfo.get('phone')}</p>
    <p>Business Name: ${myInfo.get('orgName')}</p>
    <p>Business Description: ${myInfo.get('orgDesc')}</p>
    <p>Membership Level: ${myInfo.get('membershipLevel')}</p>
    <p>Date: ${myInfo.get('timestamp2')}</p>
    `