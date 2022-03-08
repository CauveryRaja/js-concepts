let throttledClick = throttle(btnClick, 2000);
function clickListener() {
    throttledClick();
}

function btnClick() {
    console.log('Button clicked...');
}

function throttle(callback, interval) {
    let timerId;
    return function() {
        if(timerId)
            return;
        timerId = setTimeout(() => {
            callback();
            timerId = undefined;
        }, interval);
    }
}