//1
alert('Against all probability, you have appeared on a path in medieval England.' +
  ' there is a merchant wandering the path. he approaches you and asks the following...');
var name = (prompt('What is your name, adventurer?'));
if (name === '') {
  var morality = 'mute';
  var mute = true;
} else if (name === 'null') {
  alert('Well then, I take it you don\'t want to play, suit yourself.');
  var gameOver = true;
} else if (name === 'Dat Boi') {
  var morality = 'datBoi';
  var datBoi = true;
} else {
  var morality = prompt('Greetings, ' + name +
    '. Tell me, do you follow the path of good or that of evil?').toLowerCase();
}
switch (morality) {
  case 'good':
    var morality = 'good';
    break;
  case 'g':
    var morality = 'good';
    break;
  case 'evil':
    var morality = 'evil';
    break;
  case 'e':
    var morality = 'evil';
    break;
  case 'mute':
    break;
  case 'Han Solo is my bro':
    alert('Ha. I bet you subscribe to Rojigames.' +
      ' You have been eliminated by your own sword.');
    var gameOver = true;
}
//2
if (mute === true) {
  alert('Man of few words eh? I respect that.');
  var follow = confirm('Well, i\'m heading down this way,' +
  ' you\'re welcome to join.');
}
if (follow === true) {
  alert('You give a swift nod and you both start walking.');
} else if (follow === false) {
  alert('\'suit yourself, the town\'s that way, just be careful...' +
    ' one of the paths leads to death,' +
    ' the other is nice and easy, we just don\'t' +
    ' know which is which...Good luck!\'');
} else {}
if (morality === 'datBoi') {
  var vape = prompt('Oh shit, it\'s ' + name +
    '. Yo man, do you vape?').toLowerCase();
}
if (gameOver === true || mute === true || datBoi === true) {} else {
  switch (morality) {
    case 'good':
      alert('ah, excellent. Glad you\'re not here to kill me!' +
        ' The king will be looking for you.');
      break;
    case 'evil':
      alert('oh...Please don\'t hurt me, i\'ll' +
      ' tell you were the kings castle is!' +
        'he has the most treasure in all of the kingdom!');
      break;
    default:
      alert('You are really bad at following' +
      ' instructions. so bad in fact,' +
        ' that you have spontaneously combusted.' +
        ' congratulations. game over');
      var gameOver = true;
  }
}
switch (vape) {
  case 'yes':
    var vape = true;
    break;
  case 'yeah':
    var vape = true;
    break;
  case 'yeah man':
    var vape = true;
    break;
  case 'no':
    var vape = false;
    break;
  case 'nah':
    var vape = false;
    break;
}
if (vape === true) {
  alert('Not so loud! The chem-trails are listening,' +
    ' they\'re the eyes and ears of the cigarette companies.' +
    ' The legend foretells of the one that vapes that can' +
    ' set the people Vsauceia free.');
} else if (vape === false) {
  alert('Not so loud! The chem-trails are listening,' +
    ' they\'re the eyes and ears of the cigarette companies.' +
    ' The legend foretells of the one that vapes that can' +
    ' set the people Vsauceia free.');
}
//3
switch (morality) {
  case 'good':
    alert('Ahead, you can see a fork in the road,' +
      ' but no sign indicating which way to go.' +
      ' you ask the merchant...');
    break;
  case 'evil':
    alert('Ahead, you can see a fork in the road,' +
      ' but no sign indicating which way to go.' +
      ' you ask the merchant...');
    break;
  case 'mute':
    break;
  case 'datBoi':
    break;
}
if (morality === 'mute' && follow === true) {
  alert('\'Excellent! Let\'s go then,' +
    ' it\'s a short walk to where we\'re going.\'');
}

if (morality === 'good') {
  alert('Both paths will lead you to the kings castle,' +
    ' however, one path will lead you to almost certain doom.' +
    ' The problem is, we haven\'t known which is which for centuries!' +
    ' all we know for sure is the last person that went left died a horrible death.');
} else if (morality === 'evil') {
  alert('Ok! i\'ll tell you. the path to the right will lead you to the castle.');
} else if (morality === 'mute') {} else if (morality === datBoi) {}

//4
if (mute === true && follow === true || datBoi === true || gameOver === true) {} else {
  var forkOne = prompt('Will you go left or right?').toLowerCase();
}
//fork in the road easter egg
switch (forkOne) {
  case 'left':
    var forkOne = 'left';
    break;
  case 'l':
    var forkOne = 'left';
    break;
  case 'right':
    var forkOne = 'right';
    break;
  case 'r':
    var forkOne = 'right';
    break;
}
if (mute === true && follow === true || datBoi === true || gameOver === true) {} else {
  switch (forkOne) {
    case 'left':
      alert('You start down the path to the left');
      break;
    case 'right':
      alert('You start down the path to the right');
      break;
    case null:
      alert('You decide to stay where you are.' +
        ' You stand for so long that you die of inactivity. game over.');
      var gameOver = true;
      break;
    case '':
      alert('after spending a few seconds failing to decide,' +
        ' you also fail to notice the particularly large stone under your feet' +
        ' and as such fall on your face and die from shock. game over.');
      var gameOver = true;
      break;
    default:
      alert('after spending a few seconds failing to decide,' +
        ' you also fail to notice the particularly large stone under your feet' +
        ' and as such fall on your face and die from shock. game over.');
      var gameOver = true;
  }
}
//5
if (forkOne === 'left') {
  var goodPath1 = true;
} else if (forkOne === 'right') {
  var hellPath1 = true;
} else {}
if (goodPath1 === true) {
  alert('After walking for a short time, you see the forest begin to recede.' +
    ' You must\'ve picked to correct path. (you later learn that the person' +
    ' who died here just tripped on a log and cracked his skull,' +
    ' his horrible death was down to ineptitude rather that danger.)');
}
if (hellPath1 === true) {
  alert('The path seemed perfectly normal, you think to yourself ' +
    '\' I am so happy I chose this path, this was definitely the correct way to g....\'' +
    ' And in this moment, you find yourself plummeting 30 foot into pit which' +
    ' can only be described as "unfavourable". You chose the wrong path.');
}
var legBreak1 = Math.random('') * 100;

//6
if (goodPath1 === true) {
  var castleVisit1 = confirm('you follow the path further until you\'ve completely' +
    ' left the forest. You keep walking until you see a' +
    ' large castle at the end of the path.' +
    ' Do you wish to continue to the castle?');
} else if (hellPath1 === true && legBreak1 > 30) {
  alert('You wake up and try to get your bearings.' +
    ' you can only make out vague shapes; albeit very scary shapes.' +
    ' you rub your eyes and try to stand up to better see.');
  legBreak1 = false;
} else if (hellPath1 === true && legBreak1 < 30) {
  alert('You wake up and try to get your bearings. You can only make out vague shapes;' +
    ' albeit very scary shapes. You rub your eyes and try to stand up to better see.' +
    ' Failing that, you bring your attention to your leg, which you now realise is in pieces.');
  legBreak1 = true;
} else if (hellPath1 === true && legBreak1 > 41 < 43) {
  alert('you can\'t see a thing. It is so dark that you can\'t tell if your eyes are open.' +
    ' It doesn\'t help that you can\'t feel anything. it is at this moment' +
    ' you realise you\'re dead. Game over');
  var gameOver = true;
}
if (hellPath1 === true && legBreak1 === false) {
  var hellPathFollow = prompt('You can see very little but you' +
    ' can make out a path in front of you.' +
    ' There also seems to be other ways to go, not following the path.' +
    ' Will you follow the path or try your luck and ignore it?').toLowerCase();
} else if (hellPath1 === true && legBreak1 === true) {
  var legBreak1Ignore = prompt('You can\'t quite stand, but you can' +
    ' see a path in front of you' +
    ' and some other off track ways to go behind you. However,' +
    ' your leg is completly decimated.' +
    ' will you attempt to repair your leg or ignore it?').toLowerCase();
}
switch (hellPathFollow) {
  case 'follow the path':
    hellPathFollow = true;
    break;
  case 'follow':
    hellPathFollow = true;
    break;
  case 'f':
    hellPathFollow = true;
    break;
  case 'ignore the path':
    hellPathFollow = false;
    break;
  case 'ignore':
    hellPathFollow = false;
    break;
  case 'i':
    hellPathFollow = false;
    break;
}
switch (legBreak1Ignore) {
  case 'attempt a repair':
    legBreak1Ignore === true;
    break;
}

if (hellPathFollow === true) {
  alert('Carefully, you start walking down the path.');
} else if (hellPathFollow === false) {
  alert('You avoid the path and start trying to find the best way to go.');
}


if (castleVisit1 === true) {
  alert('You keep following the path until you come' +
    ' to a large door on the main wall surrounding the castle.' +
    ' There is no one around to let you in.');
  var castleDoorOpen1 = false;
  var kingsCastleDoor1 = prompt('What do you do?').toLowerCase();
}
switch (kingsCastleDoor1) {
  case 'knock door':
    var castleDoorOpen1 = true;
    break;
  case 'knock':
    var castleDoorOpen1 = true;
    break;
  case 'k':
    var castleDoorOpen1 = true;
    break;
}
if (castleDoorOpen1 === false) {
  alert('You do so... but nothing happens.' +
  ' You decide to try again.');
  var kingsCastleDoor1 = prompt('What do you do?').toLowerCase();

  switch (kingsCastleDoor1) {
    case 'knock door':
      var castleDoorOpen1 = true;
      break;
    case 'knock':
      var castleDoorOpen1 = true;
      break;
    case 'k':
      var castleDoorOpen1 = true;
      break;
  }
}
if (castleDoorOpen1 === false) {
  alert('you do so...but still, nothing happens.' +
  ' Losing hope, you try once more');
  var kingsCastleDoor1 = prompt('What do you do?').toLowerCase();

  switch (kingsCastleDoor1) {
    case 'knock door':
      var castleDoorOpen1 = true;
      break;
    case 'knock':
      var castleDoorOpen1 = true;
      break;
    case 'k':
      var castleDoorOpen1 = true;
      break;
  }
}
if (castleDoorOpen1 === true) {
  alert('You knock the door. Moments later,' +
    ' the door pops open and a surprisingly' +
    ' short man guides you into the castle');
} else if (castleDoorOpen1 === false) {
  alert('after failing again, you become so overcome by the embarrassment' +
    ' of failing to open a door that your heart stops. Game over.');
  gameOver = true;
}

if (gameOver === true) {
  alert('Game over.');
} else {
  var secretEnd = confirm('The game ends here, thanks for playing :)');
}
if (secretEnd === false) {
  alert('Do you think you\'re clever? hmm...Breaking the end screen. I hope you\'re happy.');
}
console.log('end');
