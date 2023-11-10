function saveTolS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function getFromLS(key) {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }
  
  function createMarkup(arr) {
    return arr
      .map(
        ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`
      )
      .join('');
  }
  
  export { saveTolS, getFromLS, createMarkup };