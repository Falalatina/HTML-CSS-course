video = [];

let renderHTML = '';

videoprev.forEach(element => {
  renderHTML = renderHTML + `
    
    <div class="video-preview">
      <div class="thumbnail-row">
        <img class="tumbnail" 
        src="${element.image}">   
      </div>
      <div class="video-info-grid">
        <div class="channel-pic">
          <img class="profile-pic" src="channel-pic/channel-1.jpeg">
        </div>
        <div class="video-info">           
          <p class="video-title">
          ${element.title}
          </p>
          <p class="video-author">
          ${element.author}
          </p>
          <p class="video-stats">
          ${element.stats.views}M views &#183; ${element.stats.data} months ago
          </p>
        </div>
      </div>    
    </div>
  
  `;
});

document.querySelector('.video-grid')
  .innerHTML = renderHTML;