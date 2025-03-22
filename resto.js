const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalAddress = document.getElementById('modal-address');
const modalCategory = document.getElementById('modal-category');
const modalOpen = document.getElementById('modal-open');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const mainMenuBtn = document.querySelector('.main-menu');

const foodData = {
    "Kimchi Fried Rice with Egg": {
        image: "https://images.food52.com/sD5gv4jSzPYcJvOwwSFx6QsoNS0=/1200x675/4a40d6f3-4009-4bae-95d5-7e50466c1b4f--2018-0717_jeans-kimchi-fried-rice_3x2_rocky-luten_033.jpg",
        address: "Unit 14, 8137 Plaza, Escriva Dr, Ortigas Center, Pasig, 1600 Metro Manila",
        category: "Korean Cuisine",
        open: "9:00 AM - 10:00 PM",
        price: "$5",
        description: "This fried rice is so good it might make you question your life choices… like why you didn’t order two servings. Topped with a sunny-side-up egg because even your meal deserves a bright future!"
    },
    "Boneless Chicken": {
        image: "https://www.lunar.ph/wp-content/uploads/2022/04/24-Chicken-16.jpg",
        address: "Nicanor Reyes St, Sampaloc, Manila, 1008 Metro Manila",
        category: "American Cuisine",
        open: "10:00 AM - 10:00 PM",
        price: "$12",
        description: "Better than 24 Chicken? Absolutely! But don’t let the picture fool you... we’re just keeping our enemies close. Crispy, juicy, and without bones — because who has time for extra work when you're devouring deliciousness?"
    },
    "Gin Basil": {
        image: "https://akitchencat.com.au/wp-content/uploads/2016/04/gin-rickshaw-1.jpg",
        address: "5060 P Burgos, cor Guerrero, Poblacion, Makati, 1210 Metro Manila",
        category: "Cocktail",
        open: "5:00 PM - 5:00 AM",
        price: "$8",
        description: "Classy enough for James Bond but refreshing enough for a tita’s garden party. The only thing smoother than this drink is the lie you’ll tell about ‘just having one more.’ Cheers!"
    },
    "Sunrise Tequila": {
        image: "https://www.asouthernsoul.com/wp-content/uploads/2021/05/tequila-sunrise-2-glasses-on-napkins.jpg",
        address: "4386 Valdez street, Poblacion Singian, Molina, Makati, 1210 Metro Manila",
        category: "Cocktail",
        open: "5:00 PM - 4:00 AM",
        price: "$8",
        description: "Perfect for pretty girlies... and their fabulous gays! 🌈✨ This vibrant drink will brighten your night faster than your ex sliding into your DMs at 2 AM. Sip responsibly… or don’t. We won’t judge!"
    }
};

document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const foodName = card.querySelector('.label').innerText;

        if (foodData[foodName]) {
            const data = foodData[foodName];
            modalName.innerText = foodName;
            modalTitle.innerText = foodName;
            modalImage.src = data.image;
            modalAddress.innerText = data.address;
            modalCategory.innerText = data.category;
            modalOpen.innerText = data.open;
            modalPrice.innerText = data.price;
            modalDescription.innerText = data.description;
            modal.style.display = 'flex';
        }
    });
});

mainMenuBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
