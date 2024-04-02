function loadPageData() {
  return {
    pageData: {},
    async init() {

      const value = localStorage.getItem('index7');

      const exists = value !== null;
      let content = null

      if (exists) {
        content = JSON.parse(value);
      } else {
        const response = await fetch("index7.json");
        content = await response.json();
      }

      localStorage.setItem("index7", JSON.stringify(content));
      this.pageData = content;
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