fetch("https://webb2-7bef.restdb.io/rest/poses", {
  method: "get",
  headers: {
    "x-apikey": "63ef772a478852088da683e1",
  },
})
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  console.log("showProducts");
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("showProduct");
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".productName").textContent = product.name;
  if (product.soldOut) {
    copy.querySelector("div").classList.add("SoldOut");
  }

  copy.querySelector(".read-more").setAttribute("href", "product.html?id=${product.id}");
  /* copy.querySelector(".seeMore").setAttribute("href", `product.html?id=${product.id}`); */

  copy.querySelector("img").src = product.img; //`https://webb2-7bef.restdb.io/rest/allproducts/${product.id}.webp`;

  copy.querySelector(".goodfor").textContent = product.goodfor;

  copy.querySelector(".othername").textContent = product.othername;

  document.querySelector(".grid-4").appendChild(copy);
}
