function throttle(callback, waitTime) {
    let shouldTrigger = true;

    return function() {
        console.log('shouldTrigger', shouldTrigger);
        if(shouldTrigger) {
            callback();
            shouldTrigger = false;
            setTimeout(() => {
                shouldTrigger = true;
            }, waitTime);
        }
    }
}

function clickListener() {
    console.log('Clicked...');
}

let throttledListener = throttle(clickListener, 5000);