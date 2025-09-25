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

