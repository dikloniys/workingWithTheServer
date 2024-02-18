export function render(data){
  console.log(data);
  const container = document.createElement('div')
  container.classList.add('container', 'ry-4')
  container.innerHTML = `
  <a href="?" class="btn btn-primary">На главную</a>
  <h1>Детальная информация о товаре ${data.title}</h1>
  <img src='${data.image}' alt='${data.title}' class="card-img-top "style='max-width: 300px'>
  <p class="card-text">${data.description}</p>
  <p class="display-3">${data.price}$</p>
  <a href="#" class="btn btn-primary">Купить</a>
  `
  return container
}
