function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }

  window.onscroll = function(){
    const header  = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY>fixedNav){
      header.classList.add('navbar-fixed');
    }else{
      header.classList.remove('navbar-fixed');
    }

  }
  // hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu')
  hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

  });

  //sidebar - samping

const panahkanan = document.querySelector('#panahkanan');
const samping = document.querySelector('#samping');

panahkanan.addEventListener('click',function(){
  samping.classList.toggle('melebar');
  panahkanan.classList.toggle('putar');
})

function Dropdown(nomor){
  var tombol = 'dropdownmenu'+nomor;
  var panahku = 'panahku'+nomor;
  const Dropdown = document.getElementById(tombol);
  const Panah = document.getElementById(panahku);

  if (Dropdown.classList.contains('hidden')){
    Dropdown.classList.remove('hidden');
    Panah.classList.add('putarpanah');
    Panah.classList.remove('balikputarpanah');

  }else{
    Dropdown.classList.add('hidden');
    Panah.classList.add('balikputarpanah');
    Panah.classList.remove('putarpanah');
  }
}

function Melebarjuga(){
    const panahkanan = document.querySelector('#panahkanan');
    const samping = document.querySelector('#samping');

    if(samping.classList.contains('melebar')){
      samping.classList.remove('melebar');
      panahkanan.classList.toggle('putar');
    }else{
      samping.classList.add('melebar');
      panahkanan.classList.toggle('putar');
    }
  }

  function  CekPassword(){
    let pass1 = document.getElementById('password1');
    let pass2 = document.getElementById('password2');
    let submit = document.getElementById('submit');
    var passku1 = pass1.value;
    var passku2 = pass2.value;

    if (pass1.value == pass2.value){
      submit.disabled=false;
    }else{
      submit.disabled=true;
    }
  }

  
  // dropbtn click
  const dropbtn = document.querySelector('#dropbtn');
  const dropcontent = document.querySelector('#drop-content');

  dropbtn.addEventListener('click',function(){
    dropcontent.classList.toggle('hidden');
  })
    

  //jadwal dosen
  const jadwaldosen = document.querySelector('#jadwaldosen');

  jadwaldosen.addEventListener('click',function(){
    jadwaldosen.classList.toggle('hidden');
  })

  const checkbox = document.querySelector('#toggle');
        const html = document.querySelector('html');

        checkbox.addEventListener('click', function () {
            checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
        });

  
        


