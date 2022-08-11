// Step 1: Create XHR object
const xhr = new XMLHttpRequest();

// 2. Open portal of communication between client and server
const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11`;
xhr.open('GET', url, false);
