'use strict'

const betCoins = document.querySelector('.bet-coins')
const betCoin5Btn = document.querySelector('.btn--5-coin')
const betCoin10Btn = document.querySelector('.btn--10-coin')
const betCoin50Btn = document.querySelector('.btn--50-coin')
const betCoin100Btn = document.querySelector('.btn--100-coin')
const beforePlayBtns = document.querySelector('.before-play')
const afterPlayBtns = document.querySelector('.after-play')
const bet = document.querySelector('.bet')
const bettedCoin = document.querySelector('.betted-coin')
const remainingCoinsLabel = document.querySelector('.remaining-coins')
const clearBtn = document.querySelector('.btn--clear')
const dealBtn = document.querySelector('.btn--deal')
const welcomePara = document.querySelector('.welcome-para')
const betPara = document.querySelector('.bet-para')
const hitBtn = document.querySelector('.btn--hit')
const cardEl1 = document.getElementById('card-1')
const cardEl2 = document.getElementById('card-2')

let num = 0
let remainingCoins = 2000

const randomCard = function(cardEl){
  const randomNum = Math.trunc(Math.random() * 13) + 1
  switch (randomNum) {
    case 1:
      cardEl.src = 'images/card-1.png'
      break
    case 2:
      cardEl.src = 'images/card-2.png'
      break
    case 3:
      cardEl.src = 'images/card-3.webp'
      break
    case 4:
      cardEl.src = 'images/card-4.webp'
      break
    case 5:
      cardEl.src = 'images/card-5.webp'
      break
    case 6:
      cardEl.src = 'images/card-6.webp'
      break
    case 7:
      cardEl.src = 'images/card-7.png'
      break
    case 8:
      cardEl.src = 'images/card-8.png'
      break
    case 9:
      cardEl.src = 'images/card-9.webp'
      break
    case 10:
      cardEl.src = 'images/card-10.webp'
      break
    case 11:
      cardEl.src = 'images/card-11.png'
      break
    case 12:
      cardEl.src = 'images/card-12.jpg'
      break
    default:
      cardEl.src = 'images/card-13.jpg'
  }
}



betCoins.addEventListener('click', function () {
  beforePlayBtns.classList.remove('hidden')
  bet.classList.remove('hidden')
  welcomePara.classList.add('hidden')
  betPara.classList.add('hidden')
})

betCoin5Btn.addEventListener('click', function () {
  num += 5
  remainingCoins -= 5
  bettedCoin.textContent = num
  remainingCoinsLabel.textContent = remainingCoins
})

betCoin10Btn.addEventListener('click', function () {
  num += 10
  remainingCoins -= 10
  bettedCoin.textContent = num
  remainingCoinsLabel.textContent = remainingCoins
})

betCoin50Btn.addEventListener('click', function () {
  num += 50
  remainingCoins -= 50
  bettedCoin.textContent = num
  remainingCoinsLabel.textContent = remainingCoins
})

betCoin100Btn.addEventListener('click', function () {
  num += 100
  remainingCoins -= 100
  bettedCoin.textContent = num
  remainingCoinsLabel.textContent = remainingCoins
})

clearBtn.addEventListener('click', function () {
  bettedCoin.textContent = 0
  num = 0
  remainingCoins = 2000
  remainingCoinsLabel.textContent = remainingCoins
})

dealBtn.addEventListener('click', function () {
  if (num !== 0) {
    betCoins.classList.add('hidden')
    beforePlayBtns.classList.add('hidden')
    afterPlayBtns.classList.remove('hidden')
    cardEl1.classList.remove('hidden')
    cardEl2.classList.remove('hidden')
    randomCard(cardEl1)
    randomCard(cardEl2)
  }
})

hitBtn.addEventListener('click', function () {
  
})
