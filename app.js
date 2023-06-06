
let error = document.querySelector('.error')
let email = document.querySelector('#email')
let success = document.querySelector('#success')
let main = document.querySelector('main')
let subBtn = document.getElementById('sub').addEventListener('click',display)

function display(){
  let input = email.value;

if (input.length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
  error.setAttribute('data-visible',true)
  email.style.border = '1px solid red'
  email.style.color = 'hsl(4, 100%, 67%)'
  email.style.backgroundColor =' hsl(4, 100%, 67%)'
 } 
else{
      success.setAttribute('data-visible',true)
      main.setAttribute('data-visible',false)
    }
}


