/* Park Section Animations */

const applyAnimations = setInterval(() => {
  const image1 = document.getElementsByClassName("image-1")[0];
  const image2 = document.getElementsByClassName("image-2")[0];
  const image3 = document.getElementsByClassName("image-3")[0];

  const line1 = document.getElementsByClassName("l1")[0];
  const line2 = document.getElementsByClassName("l2")[0];
  const line3 = document.getElementsByClassName("l3")[0];

  const description1 = document.getElementsByClassName("d1")[0];
  const description2 = document.getElementsByClassName("d2")[0];
  const description3 = document.getElementsByClassName("d3")[0];

  function screenSize() {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 841) {
      return true;
    } else {
      return false;
    }
  }

  function ani_1() {
    if (screenSize() === true) {
      line1.style.transition = "all 0.5s";
      line1.style.width = "100%";
      description1.style.transition = "all 0.5s 0.5s";
      description1.style.opacity = "1";
    }
  }

  function ani_2() {
    if (screenSize() === true) {
      line2.style.transition = "all 0.5s";
      line2.style.width = "100%";
      description2.style.transition = "all 0.5s 0.5s";
      description2.style.opacity = "1";
    }
  }

  function ani_3() {
    if (screenSize() === true) {
      line3.style.transition = "all 0.5s";
      line3.style.width = "100%";
      description3.style.transition = "all 0.5s 0.5s";
      description3.style.opacity = "1";
    }
  }

  function ani_4() {
    if (screenSize() === true) {
      line1.style.transition = "all 0.3s 0.3s";
      line1.style.width = "0%";
      description1.style.transition = "all 0.3s";
      description1.style.opacity = "0";
    }
  }

  function ani_5() {
    if (screenSize() === true) {
      line2.style.transition = "all 0.3s 0.3s";
      line2.style.width = "0%";
      description2.style.transition = "all 0.3s";
      description2.style.opacity = "0";
    }
  }

  function ani_6() {
    if (screenSize() === true) {
      line3.style.transition = "all 0.3s 0.3s";
      line3.style.width = "0%";
      description3.style.transition = "all 0.3s";
      description3.style.opacity = "0";
    }
  }

  if (image1 != undefined && image2 != undefined && image3 != undefined) {
    image1.addEventListener("mouseover", ani_1);
    image1.addEventListener("mouseout", ani_4);
    image2.addEventListener("mouseover", ani_2);
    image2.addEventListener("mouseout", ani_5);
    image3.addEventListener("mouseover", ani_3);
    image3.addEventListener("mouseout", ani_6);
    clearInterval(applyAnimations);
  }
}, 500);
