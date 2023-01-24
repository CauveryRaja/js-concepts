const bodyElm = document.getElementsByTagName('body')[0];

bodyElm.insertAdjacentHTML('beforeend', `
    <div class="container" onClick="clickListener(${'20'}, 'hello')">Hello</div>
`)

function clickListener(value, msg) {
    console.log('clicked', value, msg)
}