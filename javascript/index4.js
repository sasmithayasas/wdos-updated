function loadPageData() {
  return {
    aside: {},
    blogPosts: [],
    async init() {

      const value = localStorage.getItem('index4');

      const exists = value !== null;
      let content = null

      if (exists) {
        content = JSON.parse(value);
      } else {
        const response = await fetch("index4.json");
        content = await response.json();
      }

      localStorage.setItem('index4', JSON.stringify(content));

      this.aside = content.aside;
      this.blogPosts = content.blogPosts;
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
