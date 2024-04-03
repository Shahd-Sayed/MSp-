function apiOurGallery(){
let myImageo = document.querySelectorAll(".image");
//Attaching Api for Images on Gallery on All Page
const endpointAll = 'http://24.199.127.212:3000/galleryClient/get';
                            const imagesPerPageAll = 10;
                            let currentPage = 1;
                            let images = [];

                            const imageGridAll = document.getElementById('imageGridAll');
                            const nextBtnAll = document.getElementById('nextAll');
                            const preBtnAll = document.getElementById('previousAll');

                            async function fetchImagesAll() {
                                try {
                                    const response = await fetch(`${endpointAll}?page=${currentPage}`);
                                    const data = await response.json();
                                    arrOfImgs = data["results"].map(obj => obj.image);
                                    images = arrOfImgs; // Assuming the API response returns an array of image URLs

                                    renderImagesAll();
                                } catch (error) {
                                    console.error('Error fetching images:', error);
                                }

                            }

                            function renderImagesAll() {
                                imageGridAll.innerHTML = '';

                                const startIndex = (currentPage - 1) * imagesPerPageAll;
                                const endIndex = startIndex + imagesPerPageAll;
                                if(currentPage===1){
                                    preBtnAll.style.display="none"
                                }
                                // window.onscroll=()=>{
                                //     myImage.forEach((pic)=>{
                                //         let picTop = pic.getBoundingClientRect().top;
                                //         if (picTop < totalHeight) {
                                //         pic.classList.add("show");
                                //         } else {
                                //         pic.classList.remove("show");
                                //         }})
                                // }
                                // let myImageo = document.querySelectorAll(".image");
                                // setTimeout(()=>{
                                    // function showing() {
                                    //     console.log("hello");
                                    //     myImageo.forEach((pico)=>{
                                    //     let picoTop = pico.getBoundingClientRect().top;
                                    //     if (picoTop < totalHeight) {
                                    //     pico.classList.add("show");
                                    //     } else {
                                    //     pico.classList.remove("show");
                                    //     }
                                    // })}
                                    // window.onscroll=showing() 
                                // }
                                // showing();
                                // },200)
                                for (let i = startIndex; i < endIndex && i < images.length; i++) {
                                    const img = document.createElement('img');
                                    img.src = images[i];
                                    let containerImg = document.createElement("div");
                                    containerImg.classList.add(`image`,`item${i+1}`);
                                    containerImg.appendChild(img)
                                    imageGridAll.appendChild(containerImg);
                                    if(images.length<10){
                                        nextBtnAll.style.display="none"
                                    }
                                } 
                                let myarrg = []
                                let totalHeighto = (window.innerHeight / 5) * 4;
                                myarrg.push(...imageGridAll.children)
                                // myarrg.forEach(element => {
                                //     console.log(element)
                                //     let picTop = element.getBoundingClientRect().top;
                                //     if (picTop < totalHeighto) {
                                //     element.classList.add("show");
                                //     } else {
                                //     element.classList.remove("show");
                                //     }
                                // })
                                }


                            nextBtnAll.addEventListener('click', () => {
                                currentPage++;
                                renderImagesAll();
                            });
                            preBtnAll.addEventListener('click', () => {
                                currentPage--;
                                renderImagesAll();
                            });

                            fetchImagesAll();
                            
//Attaching Api for Images on Gallery on All Page
const endpointEvents = 'http://24.199.127.212:3000/galleryClient/getEvents';
                            const imagesPerPageEvents = 10;
                            let currentPageEvents = 1;
                            let imagesEvents = [];

                            const imageGridEvents = document.getElementById('imageGridEvents');
                            const nextBtnEvents = document.getElementById('nextEvents');
                            const preBtnEvents = document.getElementById('previousEvents');

                            async function fetchImagesEvents() {
                                try {
                                    const response = await fetch(`${endpointEvents}?page=${currentPageEvents}`);
                                    const data = await response.json();
                                    arrOfImgs = data["results"].map(obj => obj.image);
                                    imagesEvents = arrOfImgs; // Assuming the API response returns an array of image URLs

                                    renderImagesEvents();
                                } catch (error) {
                                    console.error('Error fetching images:', error);
                                }

                            }

                            function renderImagesEvents() {
                                imageGridEvents.innerHTML = '';

                                const startIndex = (currentPageEvents - 1) * imagesPerPageEvents;
                                const endIndex = startIndex + imagesPerPageEvents;
                                if(currentPageEvents===1){
                                    preBtnEvents.style.display="none"
                                }
                                for (let i = startIndex; i < endIndex && i < imagesEvents.length; i++) {
                                    const img = document.createElement('img');
                                    img.src = imagesEvents[i];
                                    let containerImg = document.createElement("div");
                                    containerImg.classList.add(`image`,`item${i+1}`);
                                    containerImg.appendChild(img)
                                    imageGridEvents.appendChild(containerImg);
                                    if(imagesEvents.length<=10){
                                        nextBtnEvents.style.display="none"
                                    }
                                    
                                }
                            }

                            nextBtnEvents.addEventListener('click', () => {
                                currentPageEvents++;
                                renderImagesEvents();
                            });
                            preBtnEvents.addEventListener('click', () => {
                                currentPageEvents--;
                                renderImagesEvents();
                            });

                            fetchImagesEvents();
                            
//Attaching Api for Images on Gallery on All Page
// const endpointSessions = 'http://24.199.127.212:3000/galleryClient/getSessions';
//                             const imagesPerPageSessions = 10;
//                             let currentPageSessions = 1;
//                             let imagesSessions = [];

//                             const imageGridSessions = document.getElementById('imageGridSessions');
//                             const nextBtnSessions = document.getElementById('nextSessions');
//                             const preBtnSessions = document.getElementById('previousSessions');

//                             async function fetchImagesSessions() {
//                                 try {
//                                     const response = await fetch(`${endpointSessions}?page=${currentPageSessions}`);
//                                     const data = await response.json();
//                                     arrOfImgs = data["results"].map(obj => obj.image);
//                                     imagesSessions = arrOfImgs; // Assuming the API response returns an array of image URLs

//                                     renderImagesSessions();
//                                 } catch (error) {
//                                     console.error('Error fetching images:', error);
//                                 }

//                             }

//                             function renderImagesSessions() {
//                                 imageGridSessions.innerHTML = '';

//                                 const startIndex = (currentPageSessions - 1) * imagesPerPageSessions;
//                                 const endIndex = startIndex + imagesPerPageSessions;
//                                 if(currentPageSessions===1){
//                                     preBtnSessions.style.display="none"
//                                 }
//                                 window.onscroll=()=>{
//                                     myImage.forEach((pic)=>{
//                                         let picTop = pic.getBoundingClientRect().top;
//                                         if (picTop < totalHeight) {
//                                         pic.classList.add("show");
//                                         } else {
//                                         pic.classList.remove("show");
//                                         }})
//                                 }
//                                 for (let i = startIndex; i < endIndex && i < imagesSessions.length; i++) {
//                                     const img = document.createElement('img');
//                                     img.src = imagesSessions[i];
//                                     let containerImg = document.createElement("div");
//                                     containerImg.classList.add(`item${i+1}`,`image`);
//                                     containerImg.appendChild(img)
//                                     imageGridSessions.appendChild(containerImg);
//                                     if(imagesSessions.length<10){
//                                         nextBtnSessions.style.display="none"
//                                     }
//                                 }
//                             }

//                             nextBtnSessions.addEventListener('click', () => {
//                                 currentPageSessions++;
//                                 renderImagesSessions();
//                             });
//                             preBtnSessions.addEventListener('click', () => {
//                                 currentPageSessions--;
//                                 renderImagesSessions();
//                             });

//                             fetchImagesSessions();
                        }
                        module.exports = { apiOurGallery };