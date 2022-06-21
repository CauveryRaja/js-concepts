console.log(window.document);

document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
})


// document only prints HTML markup, window print all properties including document's