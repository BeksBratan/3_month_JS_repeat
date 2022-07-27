const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const rus = document.querySelector("#rus")


// som.addEventListener("input", ()=>{
//     const request = new XMLHttpRequest()
//     request.open("GET", 'data.json')
//     request.setRequestHeader("Content-type", 'application/json')
//     request.send()
//     request.addEventListener("load", ()=>{
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })

const convert = (elem, target, target2) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", () => {
      const response = JSON.parse(request.response);
      if (elem === som) {
        target.value = (elem.value / response.usd).toFixed(2);
        target2.value = (elem.value / response.rus).toFixed(2);
      } else if (elem === usd) {
        target.value = (elem.value * response.usd).toFixed(2);
        target2.value = (elem.value * response.usd / response.rus).toFixed(2);
      } else if (elem === rus) {
        target.value = (elem.value * response.rus).toFixed(2);
        target2.value = (elem.value * response.rus / response.usd ).toFixed(2);
      }
      elem.value === "" ? (target.value = "") : null,
      elem.value === "" ? (target2.value = "") : null;
    });
  });
};

convert(som, usd, rus, 12);
convert(rus, som, usd);
convert(usd, som, rus);


