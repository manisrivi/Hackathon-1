let DivTag = document.createElement("div");
DivTag.innerHTML = `
<div class="container-fluid">
<div class="row">
    <div class="col">
        <nav class="navbar navbar-light fixed-top rounded-top bg-warning">
            <div class="container-fluid">
                <img class="nav_img" width="150" height="40" src="https://logodix.com/logo/20432.jpg" alt="">
                <p class="display-6 fw-bold">Enjoy Shop Cart!</p>
                <div class="d-flex gap-2">
                    <div> <input class="form-control me-2 " id="text" type="text"
                            placeholder="eg: lipstick , eyeliner" aria-label="Search"> </div>
                    <div> <button class="btn btn-outline-success" onclick="MakeUp()"
                            type="submit">Search</button> </div>
                </div>
            </div>
        </nav>
    </div>
</div>
</div>
<div class="container-fluid">
<div class="row pic">
    <div class="col">
        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://cdn.shopify.com/s/files/1/0529/0619/7148/files/Desktopimage1.jpg?v=1643454169"
                        class="d-block rounded-bottom w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.shopify.com/s/files/1/0529/0619/7148/files/ban-2_2987e5ff-d08f-4915-a5be-7e8df0b4d569.jpg?v=1643454237"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.shopify.com/s/files/1/0529/0619/7148/files/ban-3_b12aef09-464d-4ea1-b841-bf87147a9554.jpg?v=1643454299"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.shopify.com/s/files/1/0529/0619/7148/files/banner_Post_3.jpg?v=1647524773"
                        class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>
<div class="row m-2 justify-content-center">
    <div class="col-4 m-2 text-center border bg-info p-1 rounded-3">
        <h4> Product Lists </h4>
    </div>
</div>
</div>
`
document.body.append(DivTag);
// Container 
let container = document.createElement("div");
container.className = "container-fluid m-3 product"
// Row
let row = document.createElement("div");
row.className = "row justify-content-center"
// Col
document.body.append(container);
container.append(row);
// Async Function
async function MakeUp() {
    let array = document.getElementById("text").value;
    let link1 = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${array}`);
    let link2 = await link1.json();
    // Map function 
    link2.map(function (ele) {
        // Cards 
        let col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
       <div class="card m-3 zoom shadow-lg  p-1 bg-body rounded" style="width: 18rem;">
       <img height="200" src="${ele.image_link}" class="card-img-top" alt="No Image">
       <div class="card-body text-center">
       <h6 class="card-title fw-bold">Name: ${ele.name}<br><br>
        Brand: ${ele.brand} <br><br>
        Price: ${ele.price_sign}${ele.price} <br>
        </h6>
        <a href="${ele.product_link}" target="_blank"><button class="btn btn-success">Buy Now</button></a>
        <a href="${ele.website_link}" target="_blank"><button class="btn btn-primary">Description</button></a>
       

       </div>
     </div>`
        row.append(col);
    })
}