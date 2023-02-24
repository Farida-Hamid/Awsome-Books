const showHide = (flag) => {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';
  switch (flag) {
    case 1:
      document.getElementById('page1').style.display = 'block';
      break;
    case 2:
      document.getElementById('page2').style.display = 'block';
      break;
    case 3:
      document.getElementById('page3').style.display = 'block';
      break;
    default:
  }
};

// Adding the correct section
const list = document.querySelector('#list');
list.addEventListener(('click'), () => { showHide(1); });

const add = document.querySelector('#add-new');
add.addEventListener(('click'), () => { showHide(2); });

const cont = document.querySelector('#info-contact');
cont.addEventListener(('click'), () => { showHide(3); });

document.addEventListener('DOMContentLoaded', showHide(1));
