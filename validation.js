import { letRenderListOfUniq,letRenderQuntityUniq,userInputConteiner } from './render.js';
import { getUniqWordsInMap } from './logicOfUniq.js';

const button = document.querySelector('button')
const input = document.querySelector('input');
const haveChild = userInputConteiner.children.length > 0


function validation(input) {
    if(!haveChild){
        userInputConteiner.innerHTML = ''
    }
    if(!getUniqWordsInMap(input.value).size){
        letRenderQuntityUniq(getUniqWordsInMap(input.value))
        return
    }
    letRenderQuntityUniq(getUniqWordsInMap(input.value))
    letRenderListOfUniq(getUniqWordsInMap(input.value))
    
}


button.addEventListener('click',()=>{
    validation(input)
})