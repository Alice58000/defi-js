const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;
window.onload = showContent();
function showContent() {
    setTimeout(function(){
       content.style.display="inline";
       loading.style.display="none";
    }, 3000);
}
// changer les propriétés css
