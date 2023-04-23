


async function lookup() {
    var div = document.getElementById("search-div");
var content = document.getElementById("results");


    div.innerHTML = "<button class='btn btn-lg btn-primary search-button' type='button' onclick='lookup()'>Look up</button><br><br><span class='spinner-border text-center loading-indicator' role='status'></span>";


    content.innerHTML = "<div class='container py-4 py-xl-5'><div class='row gy-4 row-cols-1 row-cols-md-2'><div class='col'><div class='d-flex flex-column flex-lg-row'><div class='w-100'><img class='rounded img-fluid d-block w-100 fit-cover' style='height: 200px;' src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png'></div><div class='py-4 py-lg-0 px-lg-4'><h4>Lorem libero donec</h4><p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></div></div></div></div></div>";

    div.innerHTML = "<button class='btn btn-lg btn-primary search-button' type='button' onclick='lookup()'>Look up</button>";
}

function populatemenu() {
    var menu = document.getElementById("dropdown-menu");

    menu.innerHTML = "<option value='' disabled selected>Provider</option><option value='1'>All</option><option value='2'>Med</option><option value='3'>Let</option>"

}