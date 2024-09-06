let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let text = document.querySelector('.text');
let copyBtn = document.querySelector('.copyBtn');
let letters = {
    "a": "ا",
    "b": "ب",
    "c": "ك",
    "d": "د",
    "e": "ي",
    "f": "ف",
    "g": "ج",
    "h": "ه",
    "i": "ي",
    "j": "ج",
    "k": "ك",
    "l": "ل",
    "m": "م",
    "n": "ن",
    "o": "و",
    "p": "ب",
    "q": "ق",
    "r": "ر",
    "s": "س",
    "t": "ت",
    "u": "ي",
    "v": "ف",
    "w": "و",
    "x": "خ",
    "y": "ي",
    "z": "ز",
    "2": "ئ",
    "3": "ع",
    "4": "ش",
    "5": "خ",
    "7": "ح",
    "8": "غ",
}
copyBtn.addEventListener('click',()=>{
    if(!text.textContent) return;
    navigator.clipboard.writeText(text.textContent);
})
btn.addEventListener('click',()=>{
    let newWord = "";
    let value = input.value;
    value = value.toLowerCase();
    if(value.length==0) return;
    for(let i=0;i<input.value.length;i++){
        if("abcdefghijklmnopqrstuvwxyz234578".includes(value[i])){
            newWord+= letters[value[i]];
        }else{  
            newWord+= value[i];
        }
    }
    if(value[0]=='e' && value[1]!='h'){
        newWord = "ا" + newWord.slice(1);
    }
    if(newWord.includes('بدان')){
        newWord = newWord.replaceAll('بدان','بضان');
    }
    if(newWord.includes('يه')){
        newWord = newWord.replaceAll('يه','ايه');
    }
    if(newWord.includes('يستا')){
        newWord = newWord.replaceAll('يستا','يسطا');
    }
    if(newWord.includes('مسه')){
        newWord = newWord.replaceAll('مسه','مش');
    }
    text.textContent = newWord;
})

