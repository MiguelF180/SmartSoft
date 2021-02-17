const menu=document.querySelector('#menu'),
      btn=document.querySelector('#btn'),
      subir=document.querySelector('#up');
      
      
      btn.addEventListener('click',function(){
        menu.classList.toggle('active');
      })
      
      subir.addEventListener('click',function(){
        window.scroll({
          top:0,
          behavior:"smooth"
        })
      })