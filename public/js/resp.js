ham = document.querySelector('.ham')
con = document.querySelector('.container')
ul = document.querySelector('ul')

ham.addEventListener('click',()=>{
    con.classLsit.toggle('container-new')
    ul.classLsit.toggle('ul-new')
})