const showmodal=document.querySelectorAll('.show-modal');
const modal=document.querySelector('.modal');
const closemodal=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');


for (i=0; i<showmodal.length; i++)
    {
        showmodal[i].addEventListener("click", function(){
            modal.classList.remove('hidden')
            overlay.classList.remove('hidden')
        });
    }
    closemodal.addEventListener("click", close)
        function close(){
          modal.classList.add('hidden')
           overlay.classList.add('hidden')
    };
    document.addEventListener("keydown", function(e){
if(e.key === "Escape"){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
    })