function debounce(callback, delay) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

function changeListener(value) {
    console.log(value);
}

let deouncedChange = debounce(changeListener, 1000);