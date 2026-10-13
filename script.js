const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        description: "Enjoy music and everyday listening.",
        price: 1999,
        image: "🎧"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        description: "A stylish companion for daily life.",
        price: 2499,
        image: "⌚"
    },
    {
        id: 3,
        name: "Casual Sneakers",
        category: "fashion",
        description: "Comfortable footwear for everyday wear.",
        price: 1499,
        image: "👟"
    },
    {
        id: 4,
        name: "Classic Backpack",
        category: "fashion",
        description: "Carry your essentials in style.",
        price: 999,
        image: "🎒"
    },
    {
        id: 5,
        name: "Riding Gloves",
        category: "automotive",
        description: "Motorcycle riding gear to explore.",
        price: 799,
        image: "🏍️"
    },
    {
        id: 6,
        name: "Mini Desk Lamp",
        category: "home",
        description: "Add a little light to your workspace.",
        price: 699,
        image: "💡"
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        category: "electronics",
        description: "Bring sound to your everyday moments.",
        price: 1299,
        image: "🔊"
    },
    {
        id: 8,
        name: "Travel Bottle",
        category: "home",
        description: "A reusable bottle for life on the go.",
        price: 399,
        image: "🥤"
    }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const noResults = document.getElementById("noResults");

function renderProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    productGrid.innerHTML = filteredProducts.map(product => `
        <article class="product-card">
            <div class="product-image" aria-hidden="true">
                ${product.image}
            </div>

            <div class="product-info">
                <p class="product-category">
                    ${product.category}
                </p>

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <p class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <button
                    class="buy-button"
                    type="button"
                    data-product-id="${product.id}"
                >
                    Explore Product →
                </button>
            </div>
        </article>
    `).join("");

    noResults.hidden = filteredProducts.length > 0;
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-product-id]");

    if (!button) return;

    const productId = Number(button.dataset.productId);
    const product = products.find(item => item.id === productId);

    if (product) {
        alert(
            `${product.name}\n\nThis is a sample product. ` +
            "We'll connect approved affiliate links in a later step."
        );
    }
});

renderProducts();