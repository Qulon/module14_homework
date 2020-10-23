const resultNode = document.querySelector('.j-result')
const btnNode = document.querySelector('.j-btn')

window.onload = function () {
    if (localStorage.getItem('cardsStr') !== null) {
        resultNode.innerHTML = localStorage.getItem('cardsStr')
    }
}

function useRequest(value1, value2) {
    fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
        .then(function (response) {
            response.json().then(function (data) {
                let cards = ''

                data.forEach(item => {
                    const cardBlock = `
            <div class="card">
                <img
                    src="${item.download_url}"
                    class="card-image"
                    alt="alt"/>
                    <p>${item.author}</p>
            </div>
                `
                    cards = cards + cardBlock
                })
                resultNode.innerHTML = cards
                localStorage.setItem('cardsStr', cards)
            })
        })
}

btnNode.addEventListener('click', function () {
    const pageNum = +document.querySelector('input[id="pageNum"]').value
    const limit = +document.querySelector('input[id="limit"]').value
    if (typeof pageNum === "number" && typeof limit === "number" && !isNaN(pageNum) && !isNaN(limit)) {
        if (pageNum >= 1 && pageNum <= 10 && limit >= 1 && limit <= 10) {
            useRequest(pageNum, limit)
        } else if ((pageNum < 1 || pageNum > 10) && (limit < 1 || limit > 10)) {
            resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
        } else if (pageNum < 1 || pageNum > 10) {
            resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        } else if (limit < 1 || limit > 10) {
            resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10'
        }
    } else {
        resultNode.innerHTML = 'Введите число'
    }


})