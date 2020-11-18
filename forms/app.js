function onSubmit() {
    // event.preventDefault();
    console.log('Submitted');
}

let reqObj = new XMLHttpRequest();
reqObj.addEventListener('load', function() {
    console.log(this.responseText);
});
reqObj.open('get', 'https://jsonplaceholder.typicode.com/todos/1/comments');
reqObj.send();

let obj = {};

function onFieldChange(name, value) {
    obj[name] = value;
    console.log(name, value);
}

function showData() {
    console.log(obj);
    fetch('https://jsonplaceholder.typicode.com/todos/1/comments', {
        method: 'post',
        body: JSON.stringify(obj)
    })
    .then(data => {
        let obj = data;
        console.log(obj);
        return obj.json();
    })
    .then(jsonData => {
        console.log(jsonData);
    })
}

function reqListener () {
  console.log(this);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://jsonplaceholder.typicode.com/todos/1/comments");
oReq.send();



document.addEventListener('click', function(event) {
    if(event.target.matches('#child')) {
        console.log('Child clicked...');
    }
    else {
        console.log('Outside clicked...');
    }
});
