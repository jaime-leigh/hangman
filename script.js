'use strict';

//Word arrays

const words = [
  //6letters

  'abacus',
  'babies',
  'cabana',
  'dabble',
  'eagles',
  'feeble',
  'gamble',
  'hacked',
  'iambic',
  'jabbed',
  'kabuki',
  'labels',
  'macaws',
  'nachos',
  'oafish',
  'pacify',
  'qigong',
  'rabbit',
  'stable',
  'tubers',
  'ugliers',
  'vacate',
  'wadded',
  'Xanadu',
  'yawned',
  'zaatar',

  //7letters
  'adverse',
  'beneath',
  'charter',
  'dynamic',
  'exclude',
  'formula',
  'genetic',
  'however',
  'initial',
  'jointly',
  'knowing',
  'leisure',
  'mineral',
  'nursing',
  'oarfish',
  'phoenix',
  'qualify',
  'radical',
  'species',
  'thereby',
  'utility',
  'venture',
  'waddled',
  'xanthan',
  'yabbies',
  'zaniest',
  //8letters
  'abandons',
  'babushka',
  'cabooses',
  'dandriff',
  'egomania',
  'fastener',
  'gumption',
  'headbutt',
  'idealism',
  'Jakartan',
  'kumquats',
  'laboured',
  'magician',
  'necrosis',
  'overturn',
  'pharoahs',
  'quadrant',
  'robotic',
  'subsumes',
  'thatched',
  'ulterior',
  'vicinity',
  'weaponry',
  'xeroxing',
  'yielding',
  'zealotry',
  //9 letters
  'apartheid',
  'bicurious',
  'celestial',
  'dubrovnik',
  'eagles',
  'eradiated',
  'fulminate',
  'habituate',
  'inbreeder',
  'jockstrap',
  'ketogenic',
  'lobectomy',
  'macadamia',
  'nectarine',
  'obfuscate',
  'pansexual',
  'queaziest',
  'shamanism',
  'rabidness',
  'tablulated',
  'ultimatum',
  'voracious',
  'weeknight',
  'xenophone',
  'yodelling',
  'zucchinis',

  //10 letter

  'abjunction',
  'beautified',
  'caffeinate',
  'dumbstruck',
  'enamelists',
  'folklorist',
  'galactical',
  'headwaiter',
  'iconoclast',
  'jealousies',
  'Kazakhstan',
  'luminaries',
  'macerating',
  'necromancy',
  'obliterate',
  'peacefully',
  'quackishly',
  'randomised',
  'sabbatical',
  'turbulence',
  'ufologists',
  'vaccinated',
  'wordlessly',
  'xenophobic',
  'youthfully',
  'zeitgeists',

  'autophagous',
  'backpackers',
  'chancellour',
  'daredevilry',
  'eclecticism',
  'frostbitten',
  'gynecologic',
  'haemophilic',
  'ideological',
  'journalists',
  'kinesiology',
  'lacerations',
  'mockingbird',
  'needlepoint',
  'objectively',
  'parentheses',
  'qualitative',
  'rotoscoping',
  'Sagittarius',
  'teetotalism',
  'ultraviolet',
  'vibraphones',
  'wainscoting',
  'xylophonist',
  'yugoslavian',
  'zabagliones',
];

//selecting elements

let dashString = '_';

let hiddenDash = document.querySelector('.hiddenDash');

const flex = document.querySelector('.alphabet');
const letter = document.querySelector('.letter');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const i = document.querySelector('.i');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');
const m = document.querySelector('.m');
const n = document.querySelector('.n');
const o = document.querySelector('.o');
const p = document.querySelector('.p');
const q = document.querySelector('.q');
const r = document.querySelector('.r');
const s = document.querySelector('.s');
const t = document.querySelector('.t');
const u = document.querySelector('.u');
const v = document.querySelector('.v');
const w = document.querySelector('.w');
const x = document.querySelector('.x');
const y = document.querySelector('.y');
const z = document.querySelector('.z');
let quitMessage = false;
const hangman = document.querySelector('.hangman-image');

const buttonAgain = document.querySelector('.buttonAgain');

let saved = document.querySelector('.saved');
let killed = document.querySelector('.killed');
let selectedWordArray = new Array();
let turn = 0;
let killedTally = 0;
let savedTally = 0;

let three;
let threeArray;
let threeArrayString;

let completedWords = [];

let gameOver = false;
//the program

//this randomly selects a word
let selectedWord = words[Math.trunc(Math.random() * 156)];

completedWords.push(selectedWord);
//this displays the appropriate amount of dashed for the selectedWord
buildDashes();
//refreshEverything
document.querySelector('.buttonAgain').addEventListener('click', function () {
  clearItAll();
});

//refresh everything except tally
document.querySelector('.newWord').addEventListener('click', function () {
  clearMostOfIt();
});

//this function displays the same amount of dashes that the randomly selected word has

const messageBox = document.querySelector('.messageBox');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.closeMessage');
const btnsOpenModal = document.querySelectorAll('.hiddenButton');

const openModal = function () {
  messageBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  messageBox.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !messageBox.classList.contains('hidden')) {
    closeModal();
  }
});

let pressedKey = new Array();
document.addEventListener('keydown', function (es) {
  switch (es.key) {
    case a.innerHTML:
      console.log(pressedKey + 'this is a test');
      fourInOne(a);
      break;

    case b.innerHTML:
      console.log(selectedWord);
      console.log(pressedKey + 'this is a test');
      fourInOne(b);
      break;
    case c.innerHTML:
      console.log(selectedWord);
      console.log(pressedKey + 'this is a test');
      fourInOne(c);
      break;
    case d.innerHTML:
      fourInOne(d);
      break;
    case e.innerHTML:
      console.log(selectedWord);
      console.log(pressedKey + 'this is a test');
      fourInOne(e);
      break;
    case f.innerHTML:
      fourInOne(f);
      break;
    case g.innerHTML:
      fourInOne(g);
      break;
    case h.innerHTML:
      fourInOne(h);
      break;
    case i.innerHTML:
      fourInOne(i);
      break;
    case j.innerHTML:
      fourInOne(j);
      break;
    case k.innerHTML:
      fourInOne(k);
      break;
    case l.innerHTML:
      console.log(selectedWord);
      console.log(pressedKey + 'this is a test');
      fourInOne(l);
      break;
    case m.innerHTML:
      fourInOne(m);
      break;
    case n.innerHTML:
      fourInOne(n);
      break;
    case o.innerHTML:
      fourInOne(o);
      break;
    case p.innerHTML:
      fourInOne(p);
      break;
    case q.innerHTML:
      fourInOne(q);
      break;
    case r.innerHTML:
      fourInOne(r);
      break;
    case s.innerHTML:
      fourInOne(s);
      break;
    case t.innerHTML:
      fourInOne(t);
      break;
    case u.innerHTML:
      fourInOne(u);
      break;
    case v.innerHTML:
      fourInOne(v);
      break;
    case w.innerHTML:
      fourInOne(w);
      break;
    case x.innerHTML:
      fourInOne(x);
      break;
    case y.innerHTML:
      fourInOne(y);
      break;
    case z.innerHTML:
      fourInOne(z);
      break;

    default:
      break;
  }
});

a.addEventListener('click', function () {
  checkMatchLetterSelected(a);
});

//b//
b.addEventListener('click', function () {
  checkMatchLetterSelected(b);
});

//C//
c.addEventListener('click', function () {
  checkMatchLetterSelected(c);
});

//D//
d.addEventListener('click', function () {
  checkMatchLetterSelected(d);
});
//E
e.addEventListener('click', function () {
  checkMatchLetterSelected(e);
});

f.addEventListener('click', function () {
  checkMatchLetterSelected(f);
});

g.addEventListener('click', function () {
  checkMatchLetterSelected(g);
});

h.addEventListener('click', function () {
  checkMatchLetterSelected(h);
});

i.addEventListener('click', function () {
  checkMatchLetterSelected(i);
});
j.addEventListener('click', function () {
  checkMatchLetterSelected(j);
});
k.addEventListener('click', function () {
  checkMatchLetterSelected(k);
});
l.addEventListener('click', function () {
  checkMatchLetterSelected(l);
});
m.addEventListener('click', function () {
  checkMatchLetterSelected(m);
});
n.addEventListener('click', function () {
  checkMatchLetterSelected(n);
});
o.addEventListener('click', function () {
  checkMatchLetterSelected(o);
});
p.addEventListener('click', function () {
  checkMatchLetterSelected(p);
});
q.addEventListener('click', function () {
  checkMatchLetterSelected(q);
});
r.addEventListener('click', function () {
  checkMatchLetterSelected(r);
});
s.addEventListener('click', function () {
  checkMatchLetterSelected(s);
});
t.addEventListener('click', function () {
  checkMatchLetterSelected(t);
});
u.addEventListener('click', function () {
  checkMatchLetterSelected(u);
});
v.addEventListener('click', function () {
  checkMatchLetterSelected(v);
});
w.addEventListener('click', function () {
  checkMatchLetterSelected(w);
});
x.addEventListener('click', function () {
  checkMatchLetterSelected(x);
});
y.addEventListener('click', function () {
  checkMatchLetterSelected(y);
});
z.addEventListener('click', function () {
  checkMatchLetterSelected(z);
});

let message4U = document.querySelector('.message4U');
///////FUNCTIONS///////////

//key press functions//
function ifKeyPressed(keyChecked) {
  console.log('test1');
  console.log(pressedKey + 'this is a test');
  console.log('index of ' + keyChecked + pressedKey.indexOf(keyChecked));
  return pressedKey.indexOf(keyChecked);
}

function fourInOne(ifThenCheckPushMe) {
  if (ifKeyPressed(ifThenCheckPushMe.innerHTML) == -1) {
    checkMatchLetterSelected(ifThenCheckPushMe);

    if (!gameOver) {
      pressedKey.push(ifThenCheckPushMe.innerHTML);
    }
  }
}

//build the dashes
function buildDashes() {
  for (let i = 1; i < selectedWord.length; i++) {
    dashString += '_';
  }
  hiddenDash.innerHTML = dashString;
}

//BELOW THERE IS SOMETHING FUNKY GOING ON WITH THE CHECK IF WORD IS USED, IT IS LOOPING INFINITELY AT THE END. i FIXED IT, BUT IT THINK I 'UNDID' IT BE ACIDENT AND MY HEAD IS NOT FUNCTIONING BECAUSE TOO MUCH STARING AT COMPUTER SCREEN.
function wordAlreadyUsed(selectedWord) {
  let n = completedWords.indexOf(selectedWord);
  while (n > -1) {
    selectedWord = words[Math.trunc(Math.random() * 156)];
    n = completedWords.indexOf(selectedWord);
    completedWords.push(selectedWord);
  }

  return selectedWord;
}

//clearing functions
function clearMostOfIt() {
  // selectedWord = words[Math.trunc(Math.random() * 10)];

  if (completedWords.length < words.length) {
    selectedWord = wordAlreadyUsed(selectedWord);
    clearingHelper();
  } else {
    hiddenDash.innerHTML = 'no more words';
    alert(
      'congrats! All words completed\nProbably go do something else, yeah?'
    );
  }
}

function clearItAll() {
  if (completedWords.length < words.length) {
    selectedWord = wordAlreadyUsed(selectedWord);
    clearingHelper();
    savedTally = 0;
    killedTally = 0;
    saved.innerHTML = savedTally;
    killed.innerHTML = killedTally;
    gameOver = true;
  } else {
    alert(
      'congrats! All words completed\nProbably go do something else, yeah?'
    );
  }
}

function clearingHelper() {
  dashString = '_';
  buildDashes();
  hiddenDash.innerHTML = dashString;
  turn = 0;
  hangmanImageChange(turn);
  dashString = '_';
  resetStyling();
}

//main checking function.//////////
//this function checks if and where the letter matches and replaces the dash at the appropriate location and then displays in in hiddendash.innerhtml
function checkMatch(checkThisLetter) {
  gameOver = false;
  let letterInWord = false;

  let two = selectedWord;

  let twoArray = two.split('');
  three = hiddenDash.innerHTML;

  threeArray = hiddenDash.innerHTML.split('');
  threeArrayString = threeArray.toString().replaceAll(',', '');

  for (let i = 0; i < two.length; i++) {
    threeArrayString = hiddenDash.innerHTML;
    if (checkThisLetter === twoArray[i]) {
      threeArray[i] = checkThisLetter;
      threeArrayString = threeArray.toString().replaceAll(',', '');
      hiddenDash.innerHTML = threeArrayString;
      letterInWord = true;
    }
  }
  if (threeArrayString === selectedWord && turn < 9) {
    message4U.innerHTML = `you guessed the word!\nthe word was: ${selectedWord}`;
    openModal();

    savedTally++;
    saved.innerHTML = savedTally;
    gameOver = true;
    clearMostOfIt();
  } else if (turn > 8) {
    quitMessage = true;
    gameOver = true;
    manIsHung();
  }

  //adding a turn & changing the image
  if (!letterInWord && !quitMessage) {
    turn++;
    hangmanImageChange(turn);
    if (turn == 9) {
      manIsHung();
      clearMostOfIt();
      gameOver = true;
    }
  } else if (quitMessage) {
    clearMostOfIt();
    gameOver = true;
  }
}

function manIsHung() {
  hangman.src = '/images/hangman_9.png';

  message4U.innerHTML = `man is hung... sorry....\nthe word was: ${selectedWord}`;
  openModal();

  killedTally++;
  killed.innerHTML = killedTally;
  pressedKey = [];
  clearMostOfIt();
}

function hangmanImageChange(turn) {
  switch (turn) {
    case 0:
      hangman.src = '/images/hangman_0.png';
      break;
    case 1:
      hangman.src = '/images/hangman_1.png';
      break;

    case 2:
      hangman.src = '/images/hangman_2.png';
      break;

    case 3:
      hangman.src = '/images/hangman_3.png';
      break;

    case 4:
      hangman.src = '/images/hangman_4.png';
      break;

    case 5:
      hangman.src = '/images/hangman_5.png';
      break;

    case 6:
      hangman.src = '/images/hangman_6.png';
      break;

    case 7:
      hangman.src = '/images/hangman_7.png';
      break;

    case 8:
      hangman.src = '/images/hangman_8.png';
      break;

    case 9:
      hangman.src = '/images/hangman_9.png';
      break;

    default:
      break;
  }
}

function checkMatchLetterSelected(comboLetterCheck) {
  letterSelected(comboLetterCheck);
  checkMatch(comboLetterCheck.innerHTML);
}

function letterSelected(selectedLetter) {
  selectedLetter.style.color = 'black';
  selectedLetter.style.textDecoration = 'line-through';
  selectedLetter.disabled = true;
}

//RESET STYLING
function resetStyling() {
  resetStylingCompanion(a);
  resetStylingCompanion(b);
  resetStylingCompanion(c);
  resetStylingCompanion(d);
  resetStylingCompanion(e);
  resetStylingCompanion(f);
  resetStylingCompanion(g);
  resetStylingCompanion(h);
  resetStylingCompanion(i);
  resetStylingCompanion(j);
  resetStylingCompanion(k);
  resetStylingCompanion(l);
  resetStylingCompanion(m);
  resetStylingCompanion(n);
  resetStylingCompanion(o);
  resetStylingCompanion(p);
  resetStylingCompanion(q);
  resetStylingCompanion(r);
  resetStylingCompanion(s);
  resetStylingCompanion(t);
  resetStylingCompanion(u);
  resetStylingCompanion(v);
  resetStylingCompanion(w);
  resetStylingCompanion(x);
  resetStylingCompanion(y);
  resetStylingCompanion(z);
}
function resetStylingCompanion(letterChosen) {
  letterChosen.style.color = '#ffffff';
  letterChosen.style.textDecoration = 'none';
  letterChosen.disabled = false;
}
