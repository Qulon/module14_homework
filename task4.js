const resultNode = document.querySelector('.j-result')
const btnNode = document.querySelector('.j-btn')

function useRequest(firstNum, secondNum) {
    fetch(`https://picsum.photos/${firstNum}/${secondNum}`)
        .then(function (response) {
            resultNode.innerHTML = `
              <img src="${response.url}"
              alt="alt"/>
          `
        })
}

btnNode.addEventListener('click', function () {
    const firstNum = +document.querySelector('input[id="firstNum"]').value
    const secondNum = +document.querySelector('input[id="secondNum"]').value
    if (typeof firstNum && typeof secondNum === "number" && !isNaN(firstNum) && !isNaN(secondNum)) {
        if (firstNum >= 100 && firstNum <= 300 && secondNum >= 100 && secondNum <= 300) {
            useRequest(firstNum, secondNum)
        } else {
            resultNode.innerHTML = 'числа вне диапазона от 100 до 300'
        }
    }
})