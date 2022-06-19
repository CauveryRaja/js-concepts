let socket;

function connect() {
    // socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
    socket = new WebSocket('wss://localhost:8080');
    handleEvents();
}

function send() {
    console.log('Sending hello');
    socket.send('hello');
}

function handleEvents() {
    socket.onopen = function(event) {
        console.log('onopen', event);
        console.log('Connecion established !');
    }
    
    socket.onmessage = function(event) {
        console.log('onmessage', event.data);
    }
    
    socket.onerror = function(event) {
        console.log('onerror', event);
    }
    
    socket.onclose = function(event) {
        console.log('onclose', event);
    }
}