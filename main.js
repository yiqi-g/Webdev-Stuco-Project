document.addEventListener('DOMContentLoaded', () => {
    const blog1 = document.getElementById("blog-1");

    blog1.addEventListener('click', redirect => {
        console.log("clicked");
        window.location.href = "blog-1.html";
        });
});
