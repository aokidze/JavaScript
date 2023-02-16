let a = '';
let b = '';
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4','5', '6', '7', '8', '9', '.'];
const action = ['−', '+', '×', '÷', '%', '√'];

const out = document.querySelector(".calc_display p"); //Экран

function clearText() {
  a = '';
  b = '';
  sign = '';
  finish = false; 
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearText;
document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  //получать нажатую кнопку
  const key = event.target.textContent;

  //нажаты клавишы 0-9 и .
  if (digit.includes(key)) {
    if(b =='' && sign == '' ){
    a += key;
    out.textContent = a;
    }
    else if (a !== '' && b!== '' && finish){
      b = key;
      finish = false
      out.textContent = b;
    }
    else {
      
      b += key;
      out.textContent = b;
      
    }
    console.table(a, sign, b);
  return
 
  }
  
  // кнопка '+' '/' '-' '*'
  if (action.includes(key)) {
    sign = key; if(sign != '√'){
      out.textContent = sign;
    console.table(a, sign, b)
   return
    }
    
  }
switch(sign){
    case '√':
      if(sign == '√') {
         a = Math.sqrt(a) ;
        out.textContent = a;
        return
      }
   
    }
  // кнопка '='
  if(key == '='){

    // если b неизвестно 
    if(b == ''){
     
      switch(sign){
        case '+':
          a = (+a) + (+a);
          break
          
      }
    }
    
    switch(sign){
     case '+':
        a = (+a) + (+b);
        break
      case '−':
        a = (a) - (b);
        break
      case '×':
        a = (a) * (b);
        break
      case '÷':
        a = (a) / (b);
        if(b == '0') {
          out.textContent = "Ошибка";
          a = '';
          b = '';
          sign = '';
          return
        }
        break
        case '%':
          a = a / 100 * b;
          break
          
          
         
    }
    finish = true;
    out.textContent = a;
    console.table(a , sign , b)
    
  }
  

}
