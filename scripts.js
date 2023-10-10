const accesskey = "C2i_fZiHCcThWr_y7RFErbqYCUpMazJZQxAZdkjgpbE";

const Searchform = document.getElementById("Search-form");
const Searchbox = document.getElementById("Search-box");
const Searchresult = document.getElementById("Search-result");
const ShowmorebtnS = document.getElementById("Show-more-btnS");


let keyword ="";
let page = 1;

async function searchImages(){
    keyword = Searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=
    ${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    
    if(page === 1){
        Searchresult.innerHTML = "";
    }


    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        Searchresult.appendChild(imagelink);
    })
    if (results.length > 0) {
        ShowmorebtnS.style.display = "block";
    } else {
        ShowmorebtnS.style.display = "none";
    }
}

Searchform.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});

ShowmorebtnS.addEventListener("click", ()=>{
    page++;
    searchImages();

})



