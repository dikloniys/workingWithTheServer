const cssPromise = {}

function loadResource(src) {
    if(src.endsWith('.js')){
        return import(src).then(fu => fu)
        
    }
    if(src.endsWith('.css')){
        if(!cssPromise[src]){
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = src
            cssPromise[src] = new Promise(resolve => {
                link.addEventListener('load', () => resolve())
            })
            document.head.append(link)
        }
        return cssPromise[src]
    }
    return fetch(src).then(res => res.json())
}
const addContainer = document.getElementById('container')
const searchParams = new URLSearchParams(location.search)

const productId = searchParams.get('productId')

function renderPage(moduleName,apiUrl, css){
    console.log(moduleName)
    Promise.all([moduleName,apiUrl,css,].map((scr) => loadResource(scr)))
        .then(([pageModule, data]) => {
        addContainer.innerHTML = ''
        addContainer.append(pageModule.render(data))
    })
}

if(productId){
    console.log(1);
    renderPage('./product-details.js',
    `https://fakestoreapi.com/products/${productId}`,
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css')
} else {
    console.log(2);
    renderPage('./product-list.js',
    'https://fakestoreapi.com/products',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css')
}