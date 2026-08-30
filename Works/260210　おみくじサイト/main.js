'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result') ;

  btn.addEventListener('click',() =>{
    const results = ['大吉','中吉','凶','小吉'];
    const n =Math.floor(Math.random() * results.length );
// 小吉を足したいなと思った時は要素数が増えるので＊の後ろを３→４にしないといけないが面倒くさいからresult.lengthを使う


    result.textContent = results[n];

    //  result.textContent = n;  これだとランダムに１~４とかを出すことになる


    // switch (n) {
      // case 0:
        // result.textContent='大吉';
        // break;
      // case 1:
        // result.textContent='中吉'
        // break;
      // case 2:
        // result.textContent='凶' 
        // break; 
        // 長くなるけどこれでもいける
    // }
  });
}