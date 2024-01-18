

function getUniqWordsInMap(input) {
    // рядок перетворюємо до масива
    const separeteInArrey = input.split(" ").filter(Boolean);

    // проходимось по масиву та складаємо в new map
    return separeteInArrey.reduce((prev, word) => {

            // перевіряємо чи в new map є ключ (слово) у випадку якщо нема створюємо його
            // та додаємо йому значення 1 , у випадку якщо є таке вже , то збільшуємо value на 1.
            const count = prev.has(word) ? prev.get(word) + 1 : 1;

            // новоутворений map зберігається у змінній objOfUniqQuntityWords
            return prev.set(word, count);  
            }, new Map()) 
}

console.log(getUniqWordsInMap('123123 123 '))

export {getUniqWordsInMap}