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
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
            amount: 50000, // Amount in paise (e.g., 50000 = ₹500)
            currency: 'INR',
            name: 'Jeevan Aadhar',
            description: 'Payment for Donation',
            image: 'https://example.com/logo.png', // Your logo URL
            handler: function (response) {
                alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                window.location.href = 'payment-success.html';
            },
            prefill: {
                name: 'John Doe', // Prefill customer name
                email: 'john.doe@example.com', // Prefill customer email
                contact: '9999999999', // Prefill customer phone number
            },
            theme: {
                color: '#3399cc', // Customize the payment modal theme
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();
    });
});

