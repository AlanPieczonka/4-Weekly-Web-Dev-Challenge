$(document).ready(function() {
  console.log("JS WORKS");

  const header__hamburger = document.querySelector(".header__hamburger");
  const li__iconSearch = document.querySelector(".li--icon--search");

  function hamburgerIconOpen() {
    $(".header__hamburger__icon--open").css("display", "block");
    $(".header__hamburger__icon--close").css("display", "none");
  }

  function hamburgerIconClose() {
    $(".header__hamburger__icon--open").css("display", "none");
    $(".header__hamburger__icon--close").css("display", "block");
  }

  //HAMBURGER FUNCTIONALITY ON DESKTOP
  let nav__listIsOpened = true;
  header__hamburger.addEventListener("click", function() {
    if (nav__listIsOpened) {
      $(".nav__div--list").fadeOut(300);
      nav__listIsOpened = false;
      hamburgerIconClose();
    } else {
      $(".nav__div--list").fadeIn(300);
      nav__listIsOpened = true;
      hamburgerIconOpen();
    }
  });

  //HAMBURGER FUNCTIONALITY ON MOBILE
  let navMobileIsOpened = false;
  header__hamburger.addEventListener("click", function() {
    if (!navMobileIsOpened) {
      $(".nav--mobile").slideDown(function() {
        navMobileIsOpened = true;
      });
    } else {
      $(".nav--mobile").slideUp(function() {
        navMobileIsOpened = false;
      });
    }
  });

  //HAMBURGER ICON OPEN/CLOSE

  //HEADER SEARCH INPUT
  let header__inputIsOpened = false;
  li__iconSearch.addEventListener("click", function() {
    if (header__inputIsOpened === false) {
      $(".nav__line--first").addClass("closed");
      $(".header__input").fadeIn(300, function() {
        header__inputIsOpened = true;
      });
    } else {
      $(".header__input").fadeOut(300, function() {
        header__inputIsOpened = false;
      });
      setTimeout(function() {
        $(".nav__line--first").delay(1000).removeClass("closed");
      }, 300);
    }
  });

  //SOCIAL DIVS COUNTERS
  const fbCounter = document.querySelector(".social__span--counter--fb");
  let fbCount = 0;
  window.setInterval(function() {
    if (fbCount >= 156) {
      clearInterval(fbCount);
    } else {
      fbCount += 2;
      fbCounter.innerHTML = fbCount + "K";
    }
  }, 10);

  const twitterCounter = document.querySelector(
    ".social__span--counter--twitter"
  );
  twitterCounter.addEventListener("click", function() {
    console.log("twitter counter");
  });

  let twitterCount = 0;
  window.setInterval(function() {
    if (twitterCount >= 89) {
      clearInterval(twitterCount);
    } else {
      twitterCount += 1;
      twitterCounter.innerHTML = twitterCount + "K";
    }
  }, 10);

  //Slider

  const slider = document.querySelector(".slider");

  let currentImage = 1;

  const sliderButtonLeft = document.querySelector(".slider__button--left");
  const sliderButtonRight = document.querySelector(".slider__button--right");

  sliderButtonLeft.addEventListener("click", function() {
    if (currentImage === 1) {
      currentImage = 4;
    } else {
      currentImage--;
    }
    slider.style.backgroundImage = `url(./css/img/jimroot${currentImage}.jpg)`;
    changeIndicatorBackground(currentImage);
  });

  sliderButtonRight.addEventListener("click", function() {
    if (currentImage === 4) {
      currentImage = 1;
    } else {
      currentImage++;
    }
    slider.style.backgroundImage = `url(./css/img/jimroot${currentImage}.jpg)`;
    changeIndicatorBackground(currentImage);
  });

  const indicatorFirst = document.querySelector(".i--indicator--first");
  const indicatorSecond = document.querySelector(".i--indicator--second");
  const indicatorThird = document.querySelector(".i--indicator--third");
  const indicatorFourth = document.querySelector(".i--indicator--fourth");

  const indicators = [
    indicatorFirst,
    indicatorSecond,
    indicatorThird,
    indicatorFourth
  ];

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      const currentNumber = index + 1;
      slider.style.backgroundImage = `url(./css/img/jimroot${currentNumber}.jpg)`;
      currentImage = currentNumber;
      resetIndicatorsColor();
      changeIndicatorBackground(currentNumber);
    });
  });

  const resetIndicatorsColor = () => {
    indicators.forEach(indicator => {
      indicator.style.backgroundColor = "";
    });
  };

  const changeIndicatorBackground = which => {
    resetIndicatorsColor();
    switch (which) {
      case 1:
        indicatorFirst.style.backgroundColor = "white";
        break;
      case 2:
        indicatorSecond.style.backgroundColor = "white";
        break;
      case 3:
        indicatorThird.style.backgroundColor = "white";
        break;
      case 4:
        indicatorFourth.style.backgroundColor = "white";
        break;
    }
  };

  changeIndicatorBackground(1);
});
