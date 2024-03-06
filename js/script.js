document.addEventListener("DOMContentLoaded", function() {
    const portfolio = document.getElementById("portfolio");
    const categories = document.querySelectorAll("nav a");

    categories.forEach(category => {
        category.addEventListener("click", function() {
            const categoryFilter = this.dataset.category;
            portfolio.innerHTML = ""; // Clear portfolio

            // Filter images based on selected category
            const filteredImages = portfolioData.filter(item => {
                return item.category === categoryFilter || categoryFilter === "all";
            });

            filteredImages.forEach(item => {
                const imgElement = document.createElement("div");
                imgElement.classList.add("portfolio-item");
                imgElement.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
                portfolio.appendChild(imgElement);
            });
        });
    });
});

// Sample data for portfolio items
const portfolioData = [
    { category: "painting", image: "painting1.jpg", title: "Painting 1" },
    { category: "painting", image: "painting2.jpg", title: "Painting 2" },
    // Add more data for other categories...
];
