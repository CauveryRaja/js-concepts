// Approach1 - Using children property
// let listItems = Array.from(document.getElementsByTagName('ul').item(0).children);
// listItems.forEach((item, i) => {
//     console.log(item, i);
//     item.addEventListener('click', function() {
//         console.log('Item ' + (i+1) +' clicked..');
//     });
// });


// Approach2 - Event Delegation
// let childList = document.getElementsByTagName('ul').item(0).children;
// document.getElementsByTagName('ul').item(0).addEventListener('click', function(event) {
//     if(event.target.matches('li')) {
//         console.log(Array.prototype.indexOf.call(childList, event.target));
//     }
// });


// Synthetic Events without Data
// let event1 = new Event('custom');
// document.addEventListener('custom', function() {
//     console.log('Event triggered...');
// });
// setInterval(() => {
//     document.dispatchEvent(event1);
//     console.log('after triggering !')
// }, 1000);


// Synthetic Events with Data
// let event2 = new CustomEvent('custom', {
//     detail: 'hello world'
// });
// document.addEventListener('custom', function(event) {
//     console.log('Event triggered...', event.detail);
// });
// setInterval(() => document.dispatchEvent(event2), 1000);
