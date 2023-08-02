video = [];

let renderHTML = '';

videoprev.forEach(element => {
  renderHTML = renderHTML + `
    <img class="tumbnail" src="${element.image}">  
    <p class="video-title">${element.title}</p>
    <p class="video-author">${element.author}</p>
    <p class="video-stats">${element.stats.views}M views &#183; ${element.stats.data} months ago</p>
  `;
});

document.querySelector('.video-preview')
  .innerHTML = renderHTML;