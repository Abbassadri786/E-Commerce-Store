document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Product 1", price: "$19.99", image: "product1.jpg" },
        { name: "Product 2", price: "$29.99", image: "product2.jpg" },
        { name: "Product 3", price: "$39.99", image: "product3.jpg" },
        { name: "Product 4", price: "$49.99", image: "product4.jpg" },
        { name: "Product 5", price: "$59.99", image: "product5.jpg" },
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="buy-now-btn" onclick="buyNow('${product.name}')">Buy Now</button>
        `;

        productList.appendChild(card);
    });
});

function buyNow(productName) {
    alert(`Thank you for buying ${productName}!`);
}
