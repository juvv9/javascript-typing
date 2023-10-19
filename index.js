'use strict';

const questions = [
  'JavaScript',
  'documment',
  'windows',
  'getElementById',
  'getElementByClassName',
  'addEventListener'
];

const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');

let remainedTextWords = remained.textContent.split('');
let enteredTextWords = [];
let currentKey;
let currentText;

const setQuestion = () => {
  // 配列の中から、ランダムで問題文を一つ選ぶ
  currentKey = Math.floor(Math.random() * questions.length);
  currentText = questions[currentKey];


}

document.addEventListener('input', (e) => {
  if (remainedTextWords[0] === e.data) {
    // 入力済み文字の配列の最後に1文字を追加
    enteredTextWords.push(remainedTextWords[0]);
    // 未入力文字の配列の先頭から1文字を削除
    remainedTextWords.shift();

    console.log('==========================');
    console.log('入力済み' + enteredTextWords);
    console.log('未入力' + remainedTextWords);
    console.log('==========================');

    // 入力済みテキスト&未入力テキストを連結して画面表示
    entered.textContent = enteredTextWords.join('');
    remained.textContent = remainedTextWords.join('');

    // 全ての文字が正しく入力されたら新しい問題文をセット
    if (remainedTextWords.length <= 0) {
      console.log('クリア！全ての文字が入力されました');
      setQuestion(); //新しい問題文を作成する関数を実行
    }

  } else {
    console.log('不正解');
  }
});