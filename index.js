//Start Attaching Api and Images on "Our Gallery" Page You Will Find The End -> 180 on *VSCODE*
let arrOfAllInOurGallerySec = [];
let arrOfEventsInOurGallerySec = [];
let arrOfSessionsInOurGallerySec = [];
function apiOurGallery() {
    let myImageo = document.querySelectorAll(".image");
    //Attaching Api for Images on Gallery on *All* Page
    const endpointAll = "http://24.199.127.212:3000/galleryClient/get";
    const imagesPerPageAll = 10;
    let currentPage = 1;
    let images = [];
    
    const imageGridAll = document.getElementById("imageGridAll");
    const nextBtnAll = document.getElementById("nextAll");
    const preBtnAll = document.getElementById("previousAll");
    
    async function fetchImagesAll() {
        try {
            const response = await fetch(`${endpointAll}?page=${currentPage}`);
            const data = await response.json();
            arrOfImgs = data["results"].map((obj) => obj.image);
            images = arrOfImgs; 
            
            renderImagesAll();
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }
    
    function renderImagesAll() {
        imageGridAll.innerHTML = "";
        
        const startIndex = (currentPage - 1) * imagesPerPageAll;
        const endIndex = startIndex + imagesPerPageAll;
        if (currentPage === 1) {
            preBtnAll.style.display = "none";
        }
        for (let i = startIndex; i < endIndex && i < images.length; i++) {

            const myLink = document.createElement("a");
            const img = document.createElement("img");
            img.src = images[i];
            let containerImg = document.createElement("div");
            containerImg.classList.add(`image`, `item${i + 1}`);
            myLink.appendChild(img)
            containerImg.appendChild(myLink);
            imageGridAll.appendChild(containerImg);
            if (images.length < 10) {
                nextBtnAll.style.display = "none";
            }
        }
        arrOfAllInOurGallerySec.push(...imageGridAll.children);
    }
    
    nextBtnAll.addEventListener("click", () => {
        currentPage++;
    renderImagesAll();
});
preBtnAll.addEventListener("click", () => {
    currentPage--;
    renderImagesAll();
});

fetchImagesAll();

//Attaching Api for Images on Gallery on *Events* Page
const endpointEvents = "http://24.199.127.212:3000/galleryClient/getEvents";
const imagesPerPageEvents = 10;
let currentPageEvents = 1;
let imagesEvents = [];

const imageGridEvents = document.getElementById("imageGridEvents");
const nextBtnEvents = document.getElementById("nextEvents");
const preBtnEvents = document.getElementById("previousEvents");

async function fetchImagesEvents() {
    try {
        const response = await fetch(
            `${endpointEvents}?page=${currentPageEvents}`
            );
            const data = await response.json();
            arrOfImgs = data["results"].map((obj) => obj.image);
            imagesEvents = arrOfImgs; 
            
      renderImagesEvents();
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

function renderImagesEvents() {
    imageGridEvents.innerHTML = "";
    
    const startIndex = (currentPageEvents - 1) * imagesPerPageEvents;
    const endIndex = startIndex + imagesPerPageEvents;
    if (currentPageEvents === 1) {
        preBtnEvents.style.display = "none";
    }
    for (let i = startIndex; i < endIndex && i < imagesEvents.length; i++) {
        const img = document.createElement("img");
        img.src = imagesEvents[i];
        let containerImg = document.createElement("div");
        containerImg.classList.add(`image`, `item${i + 1}`);
        containerImg.appendChild(img);
        imageGridEvents.appendChild(containerImg);
        if (imagesEvents.length < 10) {
            nextBtnEvents.style.display = "none";
        }
    }
    arrOfEventsInOurGallerySec.push(...imageGridEvents.children);
}

nextBtnEvents.addEventListener("click", () => {
    currentPageEvents++;
    renderImagesEvents();
});
preBtnEvents.addEventListener("click", () => {
    currentPageEvents--;
    renderImagesEvents();
});

fetchImagesEvents();

//Attaching Api for Images on Gallery on *Sessions* Page
const endpointSessions =
"http://24.199.127.212:3000/galleryClient/getSessions";
const imagesPerPageSessions = 10;
let currentPageSessions = 1;
let imagesSessions = [];

const imageGridSessions = document.getElementById("imageGridSessions");
const nextBtnSessions = document.getElementById("nextSessions");
const preBtnSessions = document.getElementById("previousSessions");

async function fetchImagesSessions() {
    try {
        const response = await fetch(
            `${endpointSessions}?page=${currentPageSessions}`
            );
            const data = await response.json();
            arrOfImgs = data["results"].map((obj) => obj.image);
            imagesSessions = arrOfImgs;
            
            renderImagesSessions();
        } catch (error) {
            console.error("Error fetching images:", error);
    }
}

function renderImagesSessions() {
    imageGridSessions.innerHTML = "";
    
    const startIndex = (currentPageSessions - 1) * imagesPerPageSessions;
    const endIndex = startIndex + imagesPerPageSessions;
    if (currentPageSessions === 1) {
        preBtnSessions.style.display = "none";
    }
    for (let i = startIndex; i < endIndex && i < imagesSessions.length; i++) {
        const img = document.createElement("img");
        img.src = imagesSessions[i];
        let containerImg = document.createElement("div");
        containerImg.classList.add(`item${i + 1}`, `image`);
        containerImg.appendChild(img);
        imageGridSessions.appendChild(containerImg);
        if (imagesSessions.length < 10) {
            nextBtnSessions.style.display = "none";
        }
    }
    arrOfSessionsInOurGallerySec.push(...imageGridSessions.children);
}

nextBtnSessions.addEventListener("click", () => {
    currentPageSessions++;
    renderImagesSessions();
});
preBtnSessions.addEventListener("click", () => {
    currentPageSessions--;
    renderImagesSessions();
});

fetchImagesSessions();
}
//End Attaching Api and Images on "Our Gallery" Page
apiOurGallery();
let devTitles = document.querySelectorAll(".infoTitle");
var comPara = document.querySelector(".ourCommitteesDescription");
let tracks = document.querySelectorAll(".track");
let services = document.querySelectorAll(".services");
let descriptions = document.querySelectorAll(".dev-describtion");
let nonTechIcon = document.querySelectorAll(".non-tech-icon");
let nonTechTitle = document.querySelectorAll(".non-tech-title");
let navItems = document.querySelectorAll(".nav-item");
let imagesGallery = document.querySelectorAll(".imagesGallery");
let dropdownItem = document.querySelectorAll(".dropdown-item");
let mains = document.querySelectorAll("main");
let imagesContainer = document.querySelector(".imagesContainer");
let myImage = document.querySelectorAll(".image");
let containerOfGroups = document.querySelectorAll(".container-groups");
checkNetworkSpeed();
//Here are three functionsto show images in gallery
//first function All - to get all images
function getAll() {
//   imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
//   imagesContainer.children[0].style.display = "block";
//   imagesContainer.children[2].style.cssText = `transform: skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
//   imagesContainer.children[1].style.cssText = `transform: skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
//   // setTimeout(()=>{
//   // imagesContainer.children[2].style.display="none";
//   setTimeout(() => {
//     imagesContainer.children[0].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%;`;
//   }, 300);
//   // },100)
imagesContainer.children[2].style.cssText = `filter: grayscale(1);opacity: 0%;`;
imagesContainer.children[1].style.cssText = `filter: grayscale(1);opacity: 0%;`;
// imagesContainer.children[2].style.cssText = `transform:skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
// imagesContainer.children[1].style.cssText = `transform:skew(-20deg, -20deg);filter: grayscale(1);opacity: 0%;`;
imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
// imagesContainer.children[2].style.cssText=`display:block !important`
imagesContainer.style.cssText = `width:600%`;
imagesContainer.children[0].style.display = "block";
setTimeout(() => {
    imagesContainer.style.cssText = `width:300%`;
    imagesContainer.children[1].style.display = "none";
    imagesContainer.children[2].style.display = "none";
    setTimeout(()=>{
        imagesContainer.children[0].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%; display:block;`;
        
    },200)
}, 700);
// fetchImagesAll();
// renderImagesAll();
}
//first function All - to get Events images
function getEvents() {
    imagesContainer.children[2].style.cssText = `filter: grayscale(1);opacity: 0%;transition:0.7s `;
    imagesContainer.children[0].style.cssText = `filter: grayscale(1);opacity: 0%;`;
    // imagesContainer.children[2].style.cssText = `transform:skew(-20deg, -20deg);filter: grayscale(1);opacity: 0%;transition:0.7s `;
    // imagesContainer.children[0].style.cssText = `transform:skew(-10deg, -10deg);filter: grayscale(1);opacity: 0%;`;
    imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
    // imagesContainer.children[2].style.cssText=`display:block !important`
    imagesContainer.style.cssText = `width:600%`;
    imagesContainer.children[1].style.display = "block";
    setTimeout(() => {
        imagesContainer.children[2].style.display = "none";
        imagesContainer.children[0].style.display = "none";
        imagesContainer.style.cssText = `width:300%`;
        setTimeout(()=>{
            imagesContainer.children[1].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%; display:block;`;
            
        },200)
    }, 700);
    // fetchImagesEvents();
    // renderImagesEvents();
}
//first function All - to get Sessions images
function getSessions() {
    // setTimeout(()=>{

        imagesContainer.children[1].style.cssText = `filter: grayscale(1);opacity: 0%;`;
        imagesContainer.children[0].style.cssText = `filter: grayscale(1);opacity: 0%;`;
        // imagesContainer.children[1].style.cssText = `transform:skew(-20deg, -20deg);filter: grayscale(1);opacity: 0%;`;
        // imagesContainer.children[0].style.cssText = `transform:skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
    // },100)
    imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
    // imagesContainer.children[2].style.cssText=`display:block !important`
    imagesContainer.style.cssText = `width:600%`;
    imagesContainer.children[2].style.display = "block";
    setTimeout(() => {
        imagesContainer.children[1].style.display = "none";
        imagesContainer.children[0].style.display = "none";
        imagesContainer.style.cssText = `width:300%`;
        setTimeout(()=>{
            imagesContainer.children[2].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%; display:block;`;
            
        },200)
    }, 700);
    // fetchImagesSessions();
    // renderImagesSessions();
}
// nav bar SPA 
navItems.forEach((item) => {
  item.onclick = function () {
    navItems.forEach((i) => {
      i.classList.remove("active");
    });
    if (!item.classList.contains("dropdown")) {
      dropdownItem.forEach((i) => {
        i.classList.remove("active");
      });
    }

    item.classList.add("active");
    if (item == navItems[0]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[0].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[0].style.opacity = "1";
        console.log("ou-committes Section has been Appeared");
        setTimeout(() => {
          document.querySelectorAll(
            ".main-effect"
          )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
        }, 100);
        setTimeout(function adding() {
          document.querySelectorAll(".ourCommitteesDescription")[0] === null ||
          document.querySelectorAll(".ourCommitteesDescription")[0] === void 0
            ? void 0
            : document
                .querySelectorAll(".ourCommitteesDescription")[0]
                .classList.add("show1");
        }, 2000);
      }, 900);
    } else if (item == navItems[1]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        checkNetworkSpeed();
      }, 750);
      setTimeout(() => {
        mains[1].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[1].style.opacity = "1";
        console.log("ou-committes Section has been Appeared");
        setTimeout(() => {
          document.querySelectorAll(
            ".main-effect"
          )[1].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
        }, 100);
        setTimeout(function adding() {
          document.querySelectorAll(".ourCommitteesDescription")[1] === null ||
          document.querySelectorAll(".ourCommitteesDescription")[1] === void 0
            ? void 0
            : document
                .querySelectorAll(".ourCommitteesDescription")[1]
                .classList.add("show1");
        }, 2000);
        imagesGallery.forEach((item) => {
          item.onclick = function () {
            imagesGallery.forEach((i) => {
              i.classList.remove("activate");
            });
            if (item == imagesGallery[0]) {
              getAll();
            } else if (item == imagesGallery[1]) {
              getEvents();
            } else {
              getSessions();
            }
            item.classList.add("activate");
          };
        });
      }, 900);
    } else if (item == navItems[2]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[2].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[2].style.opacity = "1";
        console.log("ou-committes Section has been Appeared");
      }, 900);
    }else if (item == navItems[4]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[6].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[6].style.opacity = "1";
        console.log("ou-committes Section has been Appeared");
      }, 900);
    }
    // to be continue
    console.log(item);
  };
});
// background-color: var(--purple-accent); */
// /* color: var(--main-bg-nav-color) !important;
dropdownItem.forEach((item) => {
  item.onclick = () => {
    dropdownItem.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
    if (item == dropdownItem[0]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[3].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[3].style.opacity = "1";
        console.log("Information Section has been Appeared");
      }, 900);
    }
    else if (item == dropdownItem[1]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[4].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[4].style.opacity = "1";
        console.log("Information Section has been Appeared");
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
          // Trigger the counter increment on page load
          nCount(".numbers h3");
        });
      }, 900);
      // setTimeout(()=>{
      //   let nCount = selector => {
      //     $(selector).each(function () {
      //       const $span = $(this).find("span:first-child"); // Target the first span within each h3
      //       const currentCount = parseInt($span.text());
      //       const currentYear = new Date().getFullYear();
      //       const storedYear = localStorage.getItem("lastIncrementYear");
        
      //       if (storedYear !== currentYear) {
      //         const newCount = currentCount + 1;
      //         $span.animate({
      //           Counter: newCount
      //         }, {
      //           duration: 4000,
      //           easing: "swing",
      //           step: function (value) {
      //             $span.text(Math.ceil(value));
      //           }
      //         });
        
      //         localStorage.setItem("lastIncrementYear", currentYear);
      //       }
      //     });
      //   };
        
      //   $(document).ready(function () {
      //     // Trigger the counter increment on page load
      //     nCount(".numbers h3");
      //   });
      // },1000)
    }
    else if (item == dropdownItem[2]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[5].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[5].style.opacity = "1";
        console.log("Information Section has been Appeared");
      }, 900);
    }
  };
});

function checkNetworkSpeed() {
  if (navigator.onLine) {
    setTimeout(() => {
      // Start Splash Screen
      document.getElementById("splash").classList.add("fade");
      setTimeout(() => {
        document.getElementById("splash").classList.add("hidden");
        document.body.style.overflow = "hidden auto";
      }, 900);
      // End Splash Screen

      // Start animation Header
      document.querySelectorAll(
        ".main-effect"
      )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
      setTimeout(function adding() {
        document.querySelectorAll(".ourCommitteesDescription")[0] === null ||
        document.querySelectorAll(".ourCommitteesDescription")[0] === void 0
          ? void 0
          : document
              .querySelectorAll(".ourCommitteesDescription")[0]
              .classList.add("show1");
      }, 2000);

      // End animation Header
      setTimeout(
        (window.onscroll = function showing() {
          // document.querySelector(
          //     ".main-effect"
          // )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
          let totalHeight = (window.innerHeight / 5) * 4;
          devTitles.forEach((title) => {
            let titleTop = title.getBoundingClientRect().top;
            if (titleTop < totalHeight) {
              title.classList.add("show");
            } else {
              title.classList.remove("show");
            }
          });
          arrOfAllInOurGallerySec.forEach((element) => {
            let picTop = element.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              element.classList.add("show");
            } else {
              element.classList.remove("show");
            }
          });
          arrOfEventsInOurGallerySec.forEach((element) => {
            let picTop = element.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              element.classList.add("show");
            } else {
              element.classList.remove("show");
            }
          });
          arrOfSessionsInOurGallerySec.forEach((element) => {
            let picTop = element.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              element.classList.add("show");
            } else {
              element.classList.remove("show");
            }
          });
          myImage.forEach((pic) => {
            let picTop = pic.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              pic.classList.add("show");
            } else {
              pic.classList.remove("show");
            }
          });
          setTimeout(() => {
            descriptions.forEach((describe) => {
              let desTop = describe.getBoundingClientRect().top;
              if (desTop < totalHeight) {
                describe.classList.add("show");
              } else {
                describe.classList.remove("show");
              }
            });
          }, 700);
          setTimeout(() => {
            services.forEach((service) => {
              let serTop = service.getBoundingClientRect().top;
              if (serTop < totalHeight) {
                service.classList.add("show");
              } else {
                service.classList.remove("show");
              }
            });
          }, 1000);
          setTimeout(() => {
            tracks.forEach((tr) => {
              let trackTop = tr.getBoundingClientRect().top;
              if (trackTop < totalHeight) {
                tr.classList.add("show");
              } else {
                tr.classList.remove("show");
              }
            });
          }, 1000);
          nonTechIcon.forEach((icon) => {
            let iconTop = icon.getBoundingClientRect().top;
            if (iconTop < totalHeight) {
              icon.classList.add("show");
            } else {
              icon.classList.remove("show");
            }
          });
          nonTechTitle.forEach((title) => {
            let titleTop = title.getBoundingClientRect().top;
            if (titleTop < totalHeight) {
              title.classList.add("show");
            } else {
              title.classList.remove("show");
            }
          });
        }),
        2700
      );
    }, 2000);
  } else {
    document.getElementById("splash").style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
checkNetworkSpeed();
function scrollToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener("beforeunload", scrollToTop);