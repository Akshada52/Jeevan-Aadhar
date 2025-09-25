
// // document.addEventListener("DOMContentLoaded", function () {
// //     // Get modal elements
// //     const loginModal = document.getElementById("loginModal");
// //     const registerModal = document.getElementById("registerModal");

// //     // Get buttons
// //     const loginBtn = document.getElementById("loginBtn");
// //     const registerBtn = document.getElementById("registerBtn");

// //     // Get close buttons
// //     const closeButtons = document.querySelectorAll(".close");

// //     // Function to open modal
// //     function openModal(modal) {
// //         if (modal) {
// //             modal.style.display = "block";
// //         }
// //     }

// //     // Function to close modal
// //     function closeModal(modal) {
// //         if (modal) {
// //             modal.style.display = "none";
// //         }
// //     }

// //     // Open Login Modal
// //     if (loginBtn) {
// //         loginBtn.addEventListener("click", function () {
// //             openModal(loginModal);
// //         });
// //     }

// //     // Open Register Modal
// //     if (registerBtn) {
// //         registerBtn.addEventListener("click", function () {
// //             openModal(registerModal);
// //         });
// //     }

// //     // Close modals when clicking 'X'
// //     closeButtons.forEach((btn) => {
// //         btn.addEventListener("click", function () {
// //             const modalId = btn.getAttribute("data-modal");
// //             const modal = document.getElementById(modalId);
// //             closeModal(modal);
// //         });
// //     });

// //     // Close modals when clicking outside the modal content
// //     window.addEventListener("click", function (event) {
// //         if (event.target.classList.contains("modal")) {
// //             closeModal(event.target);
// //         }
// //     });

// //     // LOGIN FORM HANDLING
// //     const loginForm = document.getElementById("loginForm");
// //     if (loginForm) {
// //         loginForm.addEventListener("submit", function (event) {
// //             event.preventDefault();
// //             const email = document.getElementById("email").value;
// //             const password = document.getElementById("password").value;

// //             if (email && password) {
// //                 alert("Login successful!");
// //                 closeModal(loginModal);
// //             } else {
// //                 alert("Please enter valid credentials.");
// //             }
// //         });
// //     }

// //     // REGISTER FORM HANDLING
// //     const registerForm = document.getElementById("registerForm");
// //     if (registerForm) {
// //         registerForm.addEventListener("submit", function (event) {
// //             event.preventDefault();
// //             const regName = document.getElementById("regName").value;
// //             const regEmail = document.getElementById("regEmail").value;
// //             const regPhone = document.getElementById("regPhone").value;
// //             const regAddress = document.getElementById("regAddress").value;
// //             const regOccupation = document.getElementById("regOccupation").value;
// //             const regPassword = document.getElementById("regPassword").value;

// //             if (regName && regEmail && regPhone && regAddress && regOccupation && regPassword) {
// //                 alert("Registration successful!");
// //                 closeModal(registerModal);
// //             } else {
// //                 alert("Please fill in all fields.");
// //             }
// //         });
// //     }
// // });


// document.addEventListener("DOMContentLoaded", function () {
//     // Get modal elements
//     var loginModal = document.getElementById("loginModal");
//     var registerModal = document.getElementById("registerModal");

//     // Get buttons
//     var loginBtn = document.getElementById("loginBtn");
//     var registerBtn = document.getElementById("registerBtn");

//     // Get close buttons
//     var closeButtons = document.querySelectorAll(".close");

//     // Show modals on button click
//     loginBtn.addEventListener("click", function () {
//         loginModal.style.display = "block";
//     });

//     registerBtn.addEventListener("click", function () {
//         registerModal.style.display = "block";
//     });

//     // Hide modals on close button click
//     closeButtons.forEach(function (btn) {
//         btn.addEventListener("click", function () {
//             var modalId = btn.getAttribute("data-modal");
//             document.getElementById(modalId).style.display = "none";
//         });
//     });

//     // Hide modal when clicking outside of modal content
//     window.addEventListener("click", function (event) {
//         if (event.target.classList.contains("modal")) {
//             event.target.style.display = "none";
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     // Find the "For Institutes" card and add click event
//     const instituteCard = document.querySelector(".card:nth-child(1)"); // Ensure it's the correct card
//     if (instituteCard) {
//         instituteCard.addEventListener("click", function () {
//             window.location.href = "institute.html";
//         });
//     }

//     // Form Submission Logic
//     const form = document.getElementById("institute-form"); // Ensure your form has this ID

//     if (form) {
//         form.addEventListener("submit", function (event) {
//             event.preventDefault(); // Prevent page reload

//             // Fetch form values
//             const instituteName = document.getElementById("institute-name").value.trim();
//             const contactPerson = document.getElementById("contact-person").value.trim();
//             const contactEmail = document.getElementById("contact-email").value.trim();
//             const resourcesNeeded = document.getElementById("resource-needed").value.trim();
//             const quantity = document.getElementById("quantity").value.trim();
//             const priority = document.getElementById("priority").value;

//             // Validate fields
//             if (instituteName === "" || contactPerson === "" || contactEmail === "" || resourcesNeeded === "" || quantity === "") {
//                 alert("Please fill in all fields before submitting.");
//                 return;
//             }

//             // Validate email format
//             const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//             if (!contactEmail.match(emailPattern)) {
//                 alert("Please enter a valid email address.");
//                 return;
//             }

//             // Display success message
//             alert("Requirement submitted successfully!");

//             // Simulate sending data (Replace with actual backend API request)
//             console.log({
//                 instituteName,
//                 contactPerson,
//                 contactEmail,
//                 resourcesNeeded,
//                 quantity,
//                 priority,
//             });

//             // Clear form after submission
//             form.reset();
//         });
//     }
// });



// let cart = [];
// let total = 0;

// function addToCart(item, price) {
//     cart.push({ item, price });
//     total += price;
//     updateCart();
// }

// function updateCart() {
//     const cartItems = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');
//     cartItems.innerHTML = '';
//     cart.forEach((cartItem, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${cartItem.item} - Rs${cartItem.price}`;
//         cartItems.appendChild(li);
//     });
//     cartTotal.textContent = total;
// }

// function checkout() {
//     alert(`Thank you for your donation of Rs${total}!`);
//     cart = [];
//     total = 0;
//     updateCart();
// }


// // Toggle mobile menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// // Smooth scroll for nav links (if sections exist on the page)
// document.querySelectorAll('.nav-links a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const href = this.getAttribute('href');
//         if (href.includes('#')) {
//             const section = document.querySelector(href);
//             if (section) {
//                 section.scrollIntoView({ behavior: 'smooth' });
//                 navLinks.classList.remove('active');
//             }
//         } else {
//             window.location.href = suppliers.html; // Navigate to other pages
//         }
//     });
// });

// // Handle form submission and table update
// document.getElementById('supplyForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const itemName = document.getElementById('itemName').value;
//     const quantity = document.getElementById('quantity').value;
//     const institute = document.getElementById('institute').value;

//     const tbody = document.querySelector('#supplyTable tbody');
//     const row = document.createElement('tr');

//     // Create table row with click handler
//     row.innerHTML = `
//         <td>${itemName}</td>
//         <td>${quantity}</td>
//         <td>${institute}</td>
//         <td><button class="remove-btn">Remove</button></td>
//     `;

//     // // Add click event to navigate to supplier page
//     // row.addEventListener('click', function(event) {
//     //     // Only navigate if not clicking the remove button
//     //     if (!event.target.classList.contains('remove-btn')) {
//     //         window.location.href = `supplier.html?institute=${encodeURIComponent(institute)}`;
//     //     }
//     // });

//     // // Add remove button functionality
//     // row.querySelector('.remove-btn').addEventListener('click', function(e) {
//     //     e.stopPropagation(); // Prevent row click from triggering
//     //     row.remove();
//     // });

//     // tbody.appendChild(row);
//     // this.reset();
//     // alert('Item added to supply list!');
// });

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('.nav-links a[href="suppliers.html"]').addEventListener("click", (event) => {
//         event.preventDefault(); // Prevent default anchor behavior
//         window.location.href = "suppliers.html"; // Redirect to suppliers page
//     });
// });

// const urlParams = new URLSearchParams(window.location.search);
// const instituteName = urlParams.get('institute');

document.addEventListener("DOMContentLoaded", function () {
    // Get modal elements
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");

    // Get buttons
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");

    // Get close buttons
    var closeButtons = document.querySelectorAll(".close");

    // Check if buttons exist before adding event listeners
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            loginModal.style.display = "block";
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            registerModal.style.display = "block";
        });
    }

    // Hide modals on close button click
    closeButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var modalId = btn.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            if (modal) modal.style.display = "none";
        });
    });

    // Hide modal when clicking outside of modal content
    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });

    // Institute card click navigation
    const instituteCard = document.querySelector(".card:nth-child(1)");
    if (instituteCard) {
        instituteCard.addEventListener("click", function () {
            window.location.href = "institute.html";
        });
    }

    // Form Submission Logic
    const form = document.getElementById("institute-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const instituteName = document.getElementById("institute-name").value.trim();
            const contactPerson = document.getElementById("contact-person").value.trim();
            const contactEmail = document.getElementById("contact-email").value.trim();
            const resourcesNeeded = document.getElementById("resource-needed").value.trim();
            const quantity = document.getElementById("quantity").value.trim();
            const priority = document.getElementById("priority").value;

            if (!instituteName || !contactPerson || !contactEmail || !resourcesNeeded || !quantity) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Validate email format
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!contactEmail.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Requirement submitted successfully!");

            console.log({ instituteName, contactPerson, contactEmail, resourcesNeeded, quantity, priority });
            form.reset();
        });
    }

    // // Cart Logic
    // let cart = [];
    // let total = 0;

    // function addToCart(item, price) {
    //     cart.push({ item, price });
    //     total += price;
    //     updateCart();
    // }

    // function updateCart() {
    //     const cartItems = document.getElementById('cart-items');
    //     const cartTotal = document.getElementById('cart-total');
    //     if (!cartItems || !cartTotal) return;

    //     cartItems.innerHTML = '';
    //     cart.forEach((cartItem) => {
    //         const li = document.createElement('li');
    //         li.textContent = `${cartItem.item} - Rs${cartItem.price}`;
    //         cartItems.appendChild(li);
    //     });

    //     cartTotal.textContent = total;
    // }

    // function checkout() {
    //     alert(`Thank you for your donation of Rs${total}!`);
    //     cart = [];
    //     total = 0;
    //     updateCart();
    // }
     

    // Cart Logic (Improved)
const cartManager = (() => {
    let cart = [];
    let total = 0;
    
    const currencySymbol = '₹'; // Indian Rupee symbol
    
    // DOM Elements
    const elements = {
        cartItems: document.getElementById('cart-items'),
        cartTotal: document.getElementById('cart-total'),
        checkoutBtn: document.querySelector('.cart button')
    };

    // Public methods
    return {
        addToCart(item, price) {
            // Check if item already exists in cart
            const existingItem = cart.find(entry => entry.item === item);
            
            if(existingItem) {
                existingItem.quantity++;
                existingItem.total += price;
            } else {
                cart.push({
                    item,
                    price: Number(price),
                    quantity: 1,
                    total: Number(price)
                });
            }
            
            total += Number(price);
            this.updateCart();
        },

        updateCart() {
            // Clear existing items
            elements.cartItems.innerHTML = '';
            
            // Populate cart items
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${item.item} 
                    <span class="cart-item-quantity">
                        (${item.quantity}x ${currencySymbol}${item.price})
                    </span>
                    <span class="cart-item-total">${currencySymbol}${item.total}</span>
                    <button class="remove-item" data-item="${item.item}">×</button>
                `;
                elements.cartItems.appendChild(li);
            });

            // Update total
            elements.cartTotal.textContent = total.toFixed(2);
            
            // Toggle checkout button
            elements.checkoutBtn.disabled = cart.length === 0;
        },

        removeItem(itemName) {
            const itemIndex = cart.findIndex(entry => entry.item === itemName);
            if(itemIndex > -1) {
                const removedItem = cart.splice(itemIndex, 1)[0];
                total -= removedItem.total;
                this.updateCart();
            }
        },

        checkout() {
            if(cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const confirmation = confirm(
                `Confirm donation of ${currencySymbol}${total.toFixed(2)}?\n` +
                `${cart.length} items in cart.`
            );
            
            if(confirmation) {
                // Process donation here
                cart = [];
                total = 0;
                this.updateCart();
                alert('Thank you for your donation! A receipt will be emailed to you.');
            }
        }
    };
})();

// Event Listeners
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-item')) {
        const itemName = e.target.dataset.item;
        cartManager.removeItem(itemName);
    }
});

// Modified button onclick handlers
function addToCart(item, price) {
    cartManager.addToCart(item, price);
}

function checkout() {
    cartManager.checkout();
}
    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scroll for nav links
        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href.includes('#')) {
                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                        navLinks.classList.remove('active');
                    }
                } else {
                    window.location.href = "suppliers.html";
                }
            });
        });
    }

    document.getElementById('supplierLoginBtn').addEventListener('click', () => {
        const spinner = document.querySelector('.loading-spinner');
        spinner.style.display = 'inline-block';
        // Simulate a delay (e.g., API call)
        setTimeout(() => {
            window.location.href = 'suppliers.html';
        }, 2000); // Redirect after 2 seconds
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.add('hidden'));

            // Show selected section
            const sectionId = item.dataset.section;
            document.getElementById(sectionId).classList.remove('hidden');
        });
    });
});

// Show/Hide Sections
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// Chart.js for Reports
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#27ae60',
            fill: false,
        }]
    },
});

const inventoryCtx = document.getElementById('inventoryChart').getContext('2d');
const inventoryChart = new Chart(inventoryCtx, {
    type: 'bar',
    data: {
        labels: ['Medical Kits', 'Food Packages', 'Blankets'],
        datasets: [{
            label: 'Inventory',
            data: [200, 500, 300],
            backgroundColor: ['#3498db', '#2ecc71', '#9b59b6'],
        }]
    },
});

// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href').substring(1);
//         document.querySelectorAll('.section').forEach(section => {
//             section.classList.add('hidden');
//         });
//         document.getElementById(targetId).classList.remove('hidden');
//     });
// });

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(targetId).classList.remove('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agree-terms');
    const proceedBtn = document.getElementById('proceed-btn');

    agreeCheckbox.addEventListener('change', () => {
        proceedBtn.disabled = !agreeCheckbox.checked;
    });

    proceedBtn.addEventListener('click', () => {
        alert('Thank you for agreeing to the terms. You may now proceed.');
        // Add logic to redirect or enable payment integration
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agree-terms');
    const proceedBtn = document.getElementById('proceed-btn');

    agreeCheckbox.addEventListener('change', () => {
        proceedBtn.disabled = !agreeCheckbox.checked;
    });

    proceedBtn.addEventListener('click', () => {
        // Demo payment integration - replace with actual payment gateway
        alert('Demo: Payment integration would be implemented here');
        console.log('Note: Payment gateway integration removed for public repository');
        // Redirect to a demo success page
        setTimeout(() => {
            alert('Demo: Payment would be processed here');
        }, 1000);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agree-terms');
    const proceedBtn = document.getElementById('proceed-btn');

    agreeCheckbox.addEventListener('change', () => {
        proceedBtn.disabled = !agreeCheckbox.checked;
    });

    proceedBtn.addEventListener('click', () => {
        alert('Thank you for agreeing to the terms. You may now proceed.');
        // Add logic to redirect or enable payment integration
    });
});