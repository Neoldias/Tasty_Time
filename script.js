window.onscroll = () =>{
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
        
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();

document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        window.location.href = 'succusfullorder.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderSection = document.getElementById('order');
    const orderNowButtons = document.querySelectorAll('.order-now');

    orderNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            orderSection.scrollIntoView({ behavior: 'smooth' });

            
            const foodName = this.getAttribute('data-food');
            const foodNameInput = orderForm.querySelector('input[name="foodName"]');
            if (foodNameInput) {
                foodNameInput.value = foodName;
            }
        });
    });

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = 'succusfullorder.html';
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".btn.view-details");
    const orderListContainer = document.createElement("ul"); // List to display multiple items
    orderListContainer.className = "order-list";
    const orderForm = document.querySelector("#orderForm");
    const foodNameInput = document.querySelector("#orderForm input[name='foodName']");

    // Add the list container to the form, just above the 'Order Now' button
    orderForm.insertBefore(orderListContainer, orderForm.querySelector(".btn0"));

    orderButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const foodBox = event.target.closest(".box");
            const foodName = foodBox.querySelector("h3").textContent;
            const selectMenu = foodBox.querySelector("select");
            const selectedOption = selectMenu.value;

            // Check if an option is selected
            if (selectMenu.selectedIndex === 0) {
                alert("Please select a variant before ordering.");
                return; // Stop further execution
            }

            // Create a new list item for the order
            const listItem = document.createElement("li");
            listItem.textContent = `${foodName} - ${selectMenu.options[selectMenu.selectedIndex].text}`;
            
            // Add the new item to the order list container
            orderListContainer.appendChild(listItem);

            // Update the hidden food name input with all items (for form submission)
            const allItems = Array.from(orderListContainer.querySelectorAll("li"))
                .map((li) => li.textContent)
                .join(", ");
            foodNameInput.value = allItems;

            // Scroll to the order section
            const orderSection = document.querySelector(".order");
            orderSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        const menuBar = document.getElementById("menu-bar");
        const navbar = document.querySelector(".navbar");

        menuBar.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });

        // Optional: Close navbar when clicking outside
        document.addEventListener("click", function (e) {
            if (!menuBar.contains(e.target) && !navbar.contains(e.target)) {
                navbar.classList.remove("active");
            }
        });
    });

