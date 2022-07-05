let list = document.getElementsByClassName('list');

console.log(list);

Array.from(list).forEach(item => console.log(item));

for(let i=0; i<list.length; i++) {
    console.log(list[i]);
}