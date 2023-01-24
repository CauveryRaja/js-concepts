const bodyElm = document.getElementsByTagName('body')[0];

bodyElm.insertAdjacentHTML('beforeend', `
    <div class="container" onClick="clickListener(${20})">Hello</div>
`)

function clickListener(value) {
    console.log('clicked', value)
}