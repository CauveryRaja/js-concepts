// AJAX calls in JavaScript
// function makeRequests() {
//     let reqObj = new XMLHttpRequest();
//     reqObj.open('get', 'https://jsonplaceholder.typicode.com/todos/1/comments');
//     reqObj.send();
//     reqObj.addEventListener('load', function() {
//         console.log(this);
//     });

//     fetch('https://jsonplaceholder.typicode.com/todos/1/comments', {
//         method: 'get',

//     })
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

// Using Promises to make multiple requests
let getIds = new Promise((resolve, reject) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1/comments', {
        method: 'get',
    })
    .then(res => res.json())
    .then(data => resolve(data));
});
getIds.then(data => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1/comments', {
        method: 'post',
        body: data[0]
    })
    .then(res => res.json());
})
.then(data => console.log(data));

// Using Async & Await
async function asyncFun() {
    let ids = await fetch('https://jsonplaceholder.typicode.com/todos/1/comments', {
        method: 'get'
    })
    .then(res => res.json());

    console.log(ids);
}