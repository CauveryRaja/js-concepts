function arrIterator(arr) {
    let count = 0;
    return {
        next: function() {
            return count<arr.length ? {
                done: false,
                value: arr[count++]
            }
            : {
                done: true
            }
        }
    }
};

const it = arrIterator(['hi', 'hello', 'welcome']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
