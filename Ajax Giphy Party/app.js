const $gifArea = $("#gif-area");
const $searchInput = $("#search");

async function searchGif(keyword){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'j4cPUhCxThWCI4rUWo5tPo1ULO6Qy8wP', q:keyword, }});
    console.log(res);
}

function addGif(res){
    let numResults = res.data.length;
    if (numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", {class: "col-md-4 col-12 mb-4"});
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

$("form").on("submit", async function(e){
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'j4cPUhCxThWCI4rUWo5tPo1ULO6Qy8wP', q:searchTerm, }});
    addGif(res.data);
});

$("#remove").on("click", function(){
    $gifArea.empty();
});



console.log("Let's get this party started!");