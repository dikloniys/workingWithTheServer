export function render(data){

    const container = document.createElement('div')
    container.classList.add(
        'container',
        'd-flex',
        'justify-content-between',
        'flex-wrap',
        'py-4'
    )
    for(let product of data) {
        const productCard = document.createElement('div')
        const image = document.createElement('img')
        const cardBody = document.createElement('div')
        const title = document.createElement('h5')
        const price = document.createElement('p')
        const detailsButton = document.createElement('a')
        
        productCard.style.width = '18%'
        productCard.style.padding = '15px'
        productCard.classList.add('card', 'my-2')
        image.style.height = '250px'
        image.classList.add('card-img-top')
        cardBody.classList.add('card-body','d-flex','flex-column','justify-content-md-end' )
        title.classList.add('card-title')
        price.classList.add('card-text')
        detailsButton.classList.add('btn', 'btn-primary')

        productCard.append(image)
        productCard.append(cardBody)
        cardBody.append(title)
        cardBody.append(price)
        cardBody.append(detailsButton)

        console.log(product);
        image.src = product.image
        image.alt = product.title
        title.textContent = product.title
        price.textContent = `${product.price} $`
        detailsButton.textContent = 'Подробнее'
        detailsButton.href = `?productId=${product.id}`

        container.append(productCard)
    }
    return container
}
