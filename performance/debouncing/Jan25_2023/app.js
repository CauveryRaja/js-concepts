function debounce(callback, delay) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => callback(...args), delay);
    }
}

function display(greeting, msg) {
    console.log(greeting, msg);
}

const debouncedDisplay = debounce(display, 3000);