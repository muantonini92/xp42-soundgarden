const formSelector = document.querySelector('.col-6');
console.log(formSelector);

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

formSelector.addEventListener('submit', (event) => {
  event.preventDefault();

  const formObject = new FormData(formSelector);

  const attractionsArray = formObject.get('attractions-input').split(', ');

  const body = { 
      "name": formObject.get('name-input'),
      "poster": "N/D",
      "attractions": attractionsArray,
      "description": formObject.get('description-input'),
      "scheduled": formObject.get('date-input'),
      "number_tickets": formObject.get('capacity-input'),
  }    

  fetch(`${BASE_URL}/events`, {
      "method": "POST",
      "headers": { "content-type": "application/json" },
      "body": JSON.stringify(body)
  }).then((response)=>console.log(response)
  ).then(()=>{
      alert("Seu evento foi criado com sucesso");

      setTimeout(function () {
          window.location.href = 'admin.html';
      }, 1000);
  }
  ).catch((error)=>console.error(error));

})