let debouncedSlowFn = debounce(slowFunction, 500);

function typeListener(value) {
    debouncedSlowFn(value);
}

function slowFunction(value) {
    console.log(value);
}

function debounce(callback, delay) {
    let timerId;
    return (value) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => callback(value), delay);
    }
}

// debouncedSlowFn(1);
// debouncedSlowFn(2);
// debouncedSlowFn(3);
// debouncedSlowFn(4);
// debouncedSlowFn(5);