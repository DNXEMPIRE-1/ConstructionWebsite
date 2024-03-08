document.addEventListener("DOMContentLoaded", function() {
    const portfolio = document.getElementById("portfolio");
    const categories = document.querySelectorAll("nav a");

    

    categories.forEach(category => {
        category.addEventListener("click", function() {
            const categoryFilter = this.dataset.category;
            portfolio.innerHTML = ""; // Clear portfolio
            const filteredItems = (category === "all") ? portfolioData : portfolioData.filter(item => {
                return item.category === category;
            });
            

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
    { category: "building-construction", image: "img/conpaint.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con1.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con2.jpg", title: "Construction" },
    { category: "fixing-support", image: "img/fix.jpg", title: "fixing-support" },
    { category: "building-construction", image: "img/con3.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con4.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/int1.jpg", title: "architecture-design" },
    { category: "painting", image: "img/conpaint.jpg", title: "Painting" },
    { category: "house-renovation", image: "img/hr.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hr2.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hr3.jpg", title: "house-renovation" },
    { category: "building-construction", image: "img/con5.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/cons.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con6.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con7.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con8.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad2.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/con9.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad3.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/con10.jpg", title: "Construction" },
    { category: "interior-design", image: "img/id.jpg", title: "interior-design" },
    { category: "architecture-design", image: "img/ad4.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/con11.jpg", title: "Construction" },
    { category: "painting", image: "img/paint1.jpg", title: "Painting" },
    { category: "building-construction", image: "img/con12.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad5.jpg", title: "architecture-design" },



    // Add more data for other categories...
];
