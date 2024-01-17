const input = document.querySelector('input');
const userInputConteiner = document.querySelector('.statistics')



const text = 'how do you do do do do tyty tyty 1111  ';

const separeteInArrey = text.trim().split(' ')

const Uniqwords = new Set(separeteInArrey).size

const objOfUniqQuntityWords = separeteInArrey.reduce((prev,word)=>{
    const count = prev.has(word) ? prev.get(word) + 1:1;
    return prev.set(word,count)
}, new Map())
console.log(objOfUniqQuntityWords)
console.log(Uniqwords)