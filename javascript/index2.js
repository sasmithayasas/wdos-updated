function loadPageData() {
  return {
    aside: {},
    blogPosts: [],
    async init() {
      const value = localStorage.getItem("index2");

      const exists = value !== null;
      let content = null;

      if (exists) {
        content = JSON.parse(value);
      } else {
        const response = await fetch("index2.json");
        content = await response.json();
      }

      localStorage.setItem("index2", JSON.stringify(content));

      this.aside = content.aside;
      this.blogPosts = content.blogPosts;

      // we have to wait until all the elements are loaded by alpine
      // that's why we use setTimeout
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
    },
  };
}