let mybutton = document.querySelector("#click");
mybutton.onclick = function () {
  if (mybutton.classList.contains("fa-bars-staggered")) {
    mybutton.classList.remove("fa-bars-staggered");
    mybutton.classList.add("fa-x")
  }
  else {
    mybutton.classList.add("fa-bars-staggered");
    mybutton.classList.remove("fa-x")
  }
}

let nCount = selector => {
  $(selector).each(function () {
    const $span = $(this).find("span:first-child"); // Target the first span within each h3
    const currentCount = parseInt($span.text());
    const currentYear = new Date().getFullYear();
    const storedYear = localStorage.getItem("lastIncrementYear");

    if (storedYear !== currentYear) {
      const newCount = currentCount + 1;
      $span.animate({
        Counter: newCount
      }, {
        duration: 4000,
        easing: "swing",
        step: function (value) {
          $span.text(Math.ceil(value));
        }
      });

      localStorage.setItem("lastIncrementYear", currentYear);
    }
  });
};

$(document).ready(function () {
  nCount(".numbers h3");
});







