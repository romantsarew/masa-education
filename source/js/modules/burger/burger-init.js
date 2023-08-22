function burgerMenuInit() {
  const header = document.querySelector('.header');
  const navMain = document.querySelector('.header__nav');
  const navButton = document.querySelector('.header__button');
  const navLinks = document.querySelectorAll('.header__nav-list a');
  const navSublists = document.querySelectorAll('.header__nav-sublist');
  const body = document.body;

  navMain.classList.remove('header__nav--nojs');

  if (navMain.classList.contains('header__nav')) {
    navMain.classList.add('header__nav--closed');
  }

  navButton.addEventListener(
      'click',
      function () {
        if (navMain.classList.contains('header__nav--closed')) {
          navMain.classList.remove('header__nav--closed');
          navMain.classList.add('header__nav--opened');
          body.classList.add('menu--opened');
          navSublists.forEach(function (sublist) {
            sublist.classList.remove('header__nav-sublist--opened');
          });
        } else {
          navMain.classList.add('header__nav--closed');
          navMain.classList.remove('header__nav--opened');
          body.classList.remove('menu--opened');
        }
      },
      {
        passive: true,
      }
  );

  document.addEventListener('click', function (event) {
    const isClickInsideMenu = header.contains(event.target);

    if (!isClickInsideMenu) {
      navMain.classList.add('header__nav--closed');
      navMain.classList.remove('header__nav--opened');
      body.classList.remove('menu--opened');
      navSublists.forEach(function (sublist) {
        sublist.classList.remove('header__nav-sublist--opened');
      });
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (link.classList.contains('header__nav-link')) {
        event.preventDefault();
        const listItem = link.closest('.header__nav-item');
        if (listItem) {
          const sublist = listItem.querySelector('.header__nav-sublist');
          if (sublist) {
            sublist.classList.toggle('header__nav-sublist--opened');
          }
        }
      } else {
        navMain.classList.add('header__nav--closed');
        navMain.classList.remove('header__nav--opened');
        body.classList.remove('menu--opened');
      }
    });
  });
}

export {burgerMenuInit};
