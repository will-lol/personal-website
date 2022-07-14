article = document.getElementById("article");
headings = article.querySelectorAll("h1,h2,h3,h4,h5,h6");
console.log(headings)

headings.forEach(heading => {
    heading.addEventListener('click', function handleClick(event) {
        copyLinkToElement(heading);
    });
  });
function copyLinkToElement(element) {
    window.location.hash = element.id;
    navigator.clipboard.writeText(window.location.href);
}