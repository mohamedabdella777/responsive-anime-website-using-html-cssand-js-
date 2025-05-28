let searchToggler = document.querySelector('#search-toggler');
let searchForm = document.querySelector('.header .flex .search-form');
let header = document.querySelector('.header');
searchToggler.onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    
    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

let menuBtn = document.querySelector('#menu-btn');
let sideBar = document.querySelector('.side-bar');
let navbar = document.querySelector('.side-bar .navbar');
let closeBtn = document.querySelector('.side-bar .navbar #close-btn');
menuBtn.onclick = () => {
    sideBar.classList.add('active');
}

closeBtn.onclick = () => {
    sideBar.classList.remove('active');
}

window.onclick = (e) => {

    if(!navbar.contains(e.target)  && e.target !== menuBtn){
        sideBar.classList.remove('active');
    }

    if(!searchForm.contains(e.target) && e.target!== searchToggler){
        searchForm.classList.remove('active');
   }
}

//slider//

// 1
      var swiper = new Swiper(".hero-slider", {

         loop: true,
        grabCursor: true,
      


      pagination: {
        el: ".swiper-pagination",

        clickable: true,//يجعل النقاط قابلة للنقر.
        dynamicBullets: true,//يجعل النقاط تتغير بشكل ديناميكي حسب عدد السلايدات
      },
    });

//2

  var swiper = new Swiper(".trending-slider", {
      loop: true,//يجعل السلايدر يدور بشكل غير نهائي.
      grabCursor: true,//عندما تمرر الماوس فوق السلايدر، يتحول شكل المؤشر إلى يد (🖐) ليظهر أنه قابل للسحب.
      slidesPerView: 'auto',//عدد السلايدات المعروضة في الشاشة يتم تحديده تلقائيًا حسب حجم كل سلايد ومقاس الشاشة.
      spaceBetween: 20,//يضيف مسافة 20 بكسل بين كل سلايد والثاني.

      autoplay :{//هذه خاصية لتشغيل السلايدر تلقائيًا بدون تدخل من المستخدم.
        delay:2000,//يؤخر التبديل بين كل سلايد وسلايد لمدة 2000 ملي ثانية (يعني 2 ثانية).
        disableOnInteraction: false,//حتى لو المستخدم تفاعل مع السلايدر (مثلاً سحب السلايد)، التحريك التلقائي لن يتوقف.
      }


    });
    


    /*filter*/
   
 

    let list_items = document.querySelectorAll('.item');

    list_items.forEach(item => {
    item.onclick = () => {
    let list = item.parentElement.parentElement; // ← البيت
    let output = list.querySelector('.output');  // ← الصندوق
    output.value = item.innerHTML;               // ← حط فيه اللي اخترته
  };
});

//solving maxLength attripute notworking for input in htnl


   let inputs = document.querySelectorAll ('input');// let inputs = document.querySelectorAll ('input[type="number"]');لو عايز تختار نوع زي محدد


   inputs.forEach(input =>{
    input.oninput =() =>{
      if(input.value > input.maxLength)
        input.value= input.value.slice(0,input.maxLength);
    }

   });