


const hamburger = document.querySelector('.hamb')
const menu = document.querySelector('.mobile_navbar')

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('clicked');
   menu.classList.toggle('active');
})


const showCajun = document.querySelector('.cajun_description');
const showJollof = document.querySelector('.jollof_description');
const showFajita = document.querySelector('.fajita_description');
const showPepperMix = document.querySelector('.peppermix_description');
const showPepperSoup = document.querySelector('.peppersoup_description');
const showSeasoning = document.querySelector('.seasoning_description');
const overlay = document.querySelector('.overlay');
const closeModalCajun = document.querySelector('.close-modal-cajun');
const closeModalJollof = document.querySelector('.close-modal-jollof');
const closeModalFajita = document.querySelector('.close-modal-fajita');
const closeModalPepperMix = document.querySelector('.close-modal-peppermix');
const closeModalPepperSoup = document.querySelector('.close-modal-peppersoup');
const closeModalSeasoning = document.querySelector('.close-modal-seasoning');
const showModal12 = document.querySelector('.show-modal-cajun');
const showModal13 = document.querySelector('.show-modal-jollof');
const showModal14 = document.querySelector('.show-modal-fajita');
const showModal15 = document.querySelector('.show-modal-peppermix');
const showModal16 = document.querySelector('.show-modal-peppersoup')
const showModal17 = document.querySelector('.show-modal-seasoning')


const openModalCajun = function(){
   showCajun.classList.remove('hidden');
   overlay.classList.remove('hidden')
}

const closeModalWindow1 = function(){
   showCajun.classList.add('hidden');
   overlay.classList.add('hidden');
}


showModal12.addEventListener('click', openModalCajun);
closeModalCajun.addEventListener('click', closeModalWindow1);


const openModalJollof = function(){
   showJollof.classList.remove('hidden');
   overlay.classList.remove('hidden')
}

const closeModalWindow2 = function(){
   showJollof.classList.add('hidden');
   overlay.classList.add('hidden');
}


showModal13.addEventListener('click', openModalJollof);
closeModalJollof.addEventListener('click', closeModalWindow2);



const openModalFajita = function(){
   showFajita.classList.remove('hidden');
   overlay.classList.remove('hidden')
}

const closeModalWindow3 = function(){
   showFajita.classList.add('hidden');
   overlay.classList.add('hidden');
}


showModal14.addEventListener('click', openModalFajita);
closeModalFajita.addEventListener('click', closeModalWindow3);



const openModalPeppermix = function(){
   showPepperMix.classList.remove('hidden');
   overlay.classList.remove('hidden')
}

const closeModalWindow4 = function(){
   showPepperMix.classList.add('hidden');
   overlay.classList.add('hidden');
}


showModal15.addEventListener('click', openModalPeppermix);
closeModalPepperMix.addEventListener('click', closeModalWindow4);


const openModalPeppersoup = function(){
   showPepperSoup.classList.remove('hidden');
   overlay.classList.remove('hidden')
}

const closeModalWindow5 = function(){
   showPepperSoup.classList.add('hidden');
   overlay.classList.add('hidden');
}


showModal16.addEventListener('click', openModalPeppersoup);
closeModalPepperSoup.addEventListener('click', closeModalWindow5);


const openModalSeasoning = function(){
   showSeasoning.classList.remove('hidden');
   overlay.classList.remove('hidden')
}

const closeModalWindow6 = function(){
   showSeasoning.classList.add('hidden');
   overlay.classList.add('hidden');
}


showModal17.addEventListener('click', openModalSeasoning);
closeModalSeasoning.addEventListener('click', closeModalWindow6);







