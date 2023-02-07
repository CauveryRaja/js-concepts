const heading = document.getElementsByTagName('h1')[0]
const button = document.getElementsByTagName('button')[0]

const welcomeEvent = new CustomEvent('welcome')
console.log('welcome', welcomeEvent)
const helloEvent = new CustomEvent('hello')
console.log('hello', helloEvent)

heading.addEventListener('click', () => {
    heading.dispatchEvent(welcomeEvent);
});

// Does not work 
// heading.dispatchEvent(welcomeEvent);


// Does not listen events if dispatched at top level (window level)
heading.addEventListener('welcome', (event) => {
    console.log('listening welcome', event)
})