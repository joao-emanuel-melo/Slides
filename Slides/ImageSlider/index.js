//Buscar os Elementos HTML
// Selecionar todas tags div.slide

const slide = document.querySelectorAll('.slide');
// Buscar BTN Prev
const prev =  document.querySelector('#prev');
const next =  document.querySelector('#next');

// Configuração do autoplay
const auto = true;
// Tempo de transição
const intervaloTransicao = 5000;
// Tempo para exibição
let slideIntervalo;
//Eventos
next.addEventListener('click', (e) => {
    nextSlide();//chama a função

    if (auto){
        clearInterval(slideIntervalo);
        slideIntervalo = setInterval(nextSlide, intervaloTransicao)
    }
});

next.addEventListener('click', (e) => {
    prevSlide();

    if (auto){
        clearInterval(slideIntervalo);
        slideIntervalo = setInterval(nextSlide, intervaloTransicao)
    }
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//Funções:
function nextSlide(){
    // Localizar o elemento que detém da classe .atual
    const atual = document.querySelector('.atual');
    // Removendo a classe do elemento
    atual.classList.remove('atual');

    if(atual.nextElementSibling){
        atual.nextElementSibling.classList.add('atual')
    }else{
        slide[0].classList.add('atual');
    }

    setTimeout(()=> atual.classList.remove('atual'));

};

function prevSlide(){
   // Localizar o elemento que detém da classe .atual
   const atual = document.querySelector('.atual');
   // Removendo a classe do elemento
   atual.classList.remove('atual');

   if(atual.previousElementSibling){
       atual.previousElementSibling.classList.add('atual');
   } else{
       slide[slide.length-1].classList.add('atual');
   }
   setTimeout(()=> atual.classList.remove('atual'));
}; 

// caso a variável esteja como true
if(auto){
    //Mostra o próximo slide após um tempo
    slideIntervalo = setInterval(nextSlide, intervaloTransicao);
};