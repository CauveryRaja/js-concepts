
//  Print seconds with delay from start
function printSeconds() {
    for(let i=1; i<=5; i++) {
        setTimeout(() => console.log(i), i*1000);
    }
}

printSeconds();


//  Print seconds with delay from start
function printSeconds() {
    let delay = 0;
    for(let i=1; i<=5; i++) {
        delay += i*1000;
        setTimeout(() => console.log(i), delay);
    }
}

printSeconds();