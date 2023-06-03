// ДЗ 23. Активный квадрат
// создать 10 квадратов зеленого цвета
// при клике по клику на любой из квадратов он выделяется красным цветом
// если один уже выделен красным, а кликнули по-другому, то выделение с 
// прошлого — снимается, и ставится на тот по котором кликнули


let block = document.querySelector('.wraper');

block.addEventListener('click', function(event) {
  if (!event.target.classList.contains('wraper__block')) {
    return;
  }

  if (document.querySelector('.green')) {
    document.querySelector('.green').classList.remove('green');
  }

  event.target.classList.add('green');
});