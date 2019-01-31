// the following code is adapted from https://stackoverflow.com/questions/13739568/how-do-i-link-a-javascript-file-to-a-html-file
const details = document.querySelectorAll('details');
const title = document.querySelector('title');

console.log(title);

const print = function() {
  title.innerHTML = '&nbsp';
  details.forEach((element) => {
    if (!element.hasAttribute('open')){
      element.setAttribute('open', '');
    }
  });
};

// webkit
if (window.matchMedia) {
  const mediaQueryList = window.matchMedia('print');
  mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
          print();
      }
  });
}

// ie, firefox
window.onbeforeprint = print;
