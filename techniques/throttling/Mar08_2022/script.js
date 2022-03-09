let throttledClick = throttle(btnClick, 2000);
function clickListener() {
    throttledClick();
}

function btnClick() {
    console.log('Button clicked...');
}

// function throttle(callback, interval) {
//     let timerId;
//     return function() {
//         if(timerId)
//             return;
        
//         callback();
//         timerId = setTimeout(() => {
//             timerId = undefined;
//         }, interval);
//     }
// }

function throttle(callback, interval) {
    let canInvoke = true;

    return function() {
        if(canInvoke) {
            callback();
            canInvoke = false;
            setTimeout(() => canInvoke = true, interval);
        }
    }
}