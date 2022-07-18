let TwigFavorite = {
    runElement: (favoriteClickable) => {
        let data = favoriteClickable.dataset;
        fetch(`/favorites/favorites/${data.favorite}_favorite?favorite=${data.favoriteId}&model=Advertisement`, {
            method: 'GET',
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/json; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => res.json()).then((res) => {
            if (res.error) {
                alert(res.error);
            } else {
                let prev = favoriteClickable.dataset.favorite;
                favoriteClickable.dataset.favorite = favoriteClickable.dataset.favoriteInvert;
                favoriteClickable.dataset.favoriteInvert = prev;

                if (favoriteClickable.querySelector('[data-title]')) {
                    favoriteClickable.querySelector('[data-title]').textContent = data[`favorite${TwigFavorite.capitalizeFirstLetter(favoriteClickable.dataset.favorite)}Title`];
                }
                if (favoriteClickable.querySelectorAll('[data-icon]').length === 2) {
                    favoriteClickable.querySelector(`[data-icon=${prev}]`).classList.toggle('d-none')
                    favoriteClickable.querySelector(`[data-icon=${favoriteClickable.dataset.favorite}]`).classList.toggle('d-none')
                }
            }
            if (res.count !== undefined) {
                if (document.querySelector('.favorite-counter')) {
                    document.querySelector('.favorite-counter').textContent = res.count;
                }
            }
        }).catch(alert)
    },
    capitalizeFirstLetter: (action) => {
        return action.charAt(0).toUpperCase() + action.slice(1)
    },
}

document.addEventListener('DOMContentLoaded', () => {
    $('body').on('click', '[data-favorite]', (e) => {
        e.preventDefault();
        TwigFavorite.runElement(e.currentTarget);
    });
});


