const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=34de5d8c2e1a1a050d20a18c16212d71&hash=3e874a87a716e5c36c66ee8419e034dd';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHERO = hero.urls[0].url;
                    contentHTML += `
            <div class="col-md-4">
                <a href="${urlHERO}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvel.render();