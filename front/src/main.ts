import "./style.css";

interface Product {
	title: string;
	rating: string;
	reviews: string;
	image: string;
}

// DOM elements
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const searchButton = document.getElementById(
	"searchButton",
) as HTMLButtonElement;
const productsGrid = document.getElementById("productsGrid") as HTMLDivElement;
const errorElement = document.getElementById("error") as HTMLDivElement;
const loadingElement = document.getElementById("loading") as HTMLDivElement;

// API endpoint URL
const API_URL =
	import.meta.env.VITE_API_URL ?? "http://localhost:3000/api/scrape";

// Search function
async function searchProducts(keyword: string) {
	try {
		setLoading(true);
		hideError();

		const response = await fetch(
			`${API_URL}?keyword=${encodeURIComponent(keyword)}`,
		);

		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}

		const products: Product[] = await response.json();
		displayProducts(products);
	} catch (error) {
		showError(error instanceof Error ? error.message : "An error occurred");
	} finally {
		setLoading(false);
	}
}

// Display products in the grid
function displayProducts(products: Product[]) {
	productsGrid.innerHTML = "";

	for (const product of products) {
		const productCard = document.createElement("div");
		productCard.className = "product-card";

		productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-image">
      <h3 class="product-title" title="${product.title}">${product.title}</h3>
      <div class="product-rating">
        <span>★ ${product.rating.split("out of 5 stars")[0]}</span>
        <span>(${product.reviews} reviews)</span>
      </div>
    `;

		productsGrid.appendChild(productCard);
	}
}

// Error handling
function showError(message: string) {
	errorElement.textContent = message;
	errorElement.style.display = "block";
}

function hideError() {
	errorElement.style.display = "none";
}

// Loading state
function setLoading(isLoading: boolean) {
	searchButton.disabled = isLoading;
	loadingElement.style.display = isLoading ? "block" : "none";
}

// Event listeners
searchButton.addEventListener("click", () => {
	const keyword = searchInput.value.trim();
	if (keyword) {
		searchProducts(keyword);
	}
});

searchInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		const keyword = searchInput.value.trim();
		if (keyword) {
			searchProducts(keyword);
		}
	}
});
