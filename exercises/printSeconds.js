for(var i=1; i<=5; i++) {
    (function () {
        var num = i;
        setTimeout(() => {
            console.log(num);
        }, i*1000);
    })();
}