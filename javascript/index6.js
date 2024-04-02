function loadPageData() {
    return {
      asides: {},
      images: [],
      imagesWithContent: [],
      async init() {

        const value = localStorage.getItem('index6');

        const exists = value !== null;
        let content = null

        if (exists) {
          content = JSON.parse(value);
        } else {
          const response = await fetch("index6.json");
          content = await response.json();
        }
  
        localStorage.setItem('index6', JSON.stringify(content));


       
        this.asides = content.asides;
        this.images = content.images;
        this.imagesWithContent = content.imagesWithContent;
      },
    };
  }

  setTimeout(() => {
    // check if user is logged in
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) return;
  
    // if not logged in hide edit button
    const editIcons = document.querySelectorAll(".fas.fa-pen");
    editIcons.forEach((icon) => {
      icon.style.display = "none";
    });
  }, 500);

 

