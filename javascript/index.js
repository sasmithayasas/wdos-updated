const introData = {
    intro: "",
  };

  // Fetch the JSON data
  fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
      introData.intro = data.intro;
     
    })
    .catch((error) => console.error("Error fetching data:", error));


    var newsletterData = {
      "newsletter": [
  
      ]
    }


    function handleSubmit(event) {
      event.preventDefault();

      let email = document.getElementById('EmailAddress').value

      const _today = new Date();
      const _year = _today.getFullYear();
      const _month = _today.getMonth() + 1;
      const _day = _today.getDate();

      const createdDate = _year + '-' + _month.toString().padStart(2, '0') + '-' + _day.toString().padStart(2, '0');

      const value = localStorage.getItem('newsletterData');

      const exists = value !== null;
      let content = null

if (exists) {
  // If newsletterData has a value assign Json array to content
    content = JSON.parse(value);
    console.log(value)
} else {
  // If newsletterData doesn't exsits assign empty array
    content = newsletterData.newsletter;   
}

    content.push({email, createdDate});

    localStorage.setItem('newsletterData', JSON.stringify(content));
    
    alert("Thank you for subscribing to our newsletter. Get ready for awesome content delivered straight to your inbox!")
    document.getElementById('EmailAddress').value = "";
  }