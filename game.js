// تحريك اللاعبين باستخدام مفاتيح الأسهم وWASD
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let basketball = document.getElementById('basketball');
let backgroundMusic = document.getElementById('background-music');

let player1Pos = { top: 175, left: 20 };
let player2Pos = { top: 175, left: 530 };
let basketballPos = { top: 185, left: 285 };

// تشغيل الموسيقى عند بدء اللعبة
backgroundMusic.play();

document.addEventListener('keydown', function(event) {
  // اللاعب 1 (W, A, S, D)
  if (event.key === 'w' && player1Pos.top > 0) player1Pos.top -= 10;
  if (event.key === 's' && player1Pos.top < 350) player1Pos.top += 10;
  if (event.key === 'a' && player1Pos.left > 0) player1Pos.left -= 10;
  if (event.key === 'd' && player1Pos.left < 250) player1Pos.left += 10;

  // اللاعب 2 (مفاتيح الأسهم)
  if (event.key === 'ArrowUp' && player2Pos.top > 0) player2Pos.top -= 10;
  if (event.key === 'ArrowDown' && player2Pos.top < 350) player2Pos.top += 10;
  if (event.key === 'ArrowLeft' && player2Pos.left > 350) player2Pos.left -= 10;
  if (event.key === 'ArrowRight' && player2Pos.left < 550) player2Pos.left += 10;

  // تحريك اللاعبين
  player1.style.top = player1Pos.top + 'px';
  player1.style.left = player1Pos.left + 'px';

  player2.style.top = player2Pos.top + 'px';
  player2.style.left = player2Pos.left + 'px';

  // فحص الاصطدام مع كرة السلة
  checkCollision();
});

function checkCollision() {
  // المسافة بين اللاعب 1 وكرة السلة
  let dx1 = player1Pos.left - basketballPos.left;
  let dy1 = player1Pos.top - basketballPos.top;
  let distance1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

  // المسافة بين اللاعب 2 وكرة السلة
  let dx2 = player2Pos.left - basketballPos.left;
  let dy2 = player2Pos.top - basketballPos.top;
  let distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  if (distance1 < 50) moveBasketball('player1');
  if (distance2 < 50) moveBasketball('player2');
}

function moveBasketball(player) {
  if (player === 'player1') {
    basketballPos.left = player1Pos.left + 40;
    basketballPos.top = player1Pos.top + 20;
  } else {
    basketballPos.left = player2Pos.left - 40;
    basketballPos.top = player2Pos.top + 20;
  }

  basketball.style.left = basketballPos.left + 'px';
  basketball.style.top = basketballPos.top + 'px';
}
