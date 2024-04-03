const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://24.199.127.212:3000/sponsorsClient/get?page=1&limit=2", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));