const throttle = (callback, delay) => {
    let shouldTrigger = true;

    return (...args) => {
        if(shouldTrigger) {
            callback(...args);
            shouldTrigger = false;
            
            setTimeout(() => shouldTrigger = true, delay);
        }
    }
}


const throttledListener = throttle((value, data) => console.log('hello', value, data), 2000)