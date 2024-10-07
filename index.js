document.addEventListener("DOMContentLoaded", () => {
    const concertSelect = document.getElementById("concertSelect");
    const ticketType = document.getElementById("ticketType");
    const ticketQuantity = document.getElementById("ticketQuantity");
    const confirmButton = document.getElementById("confirmButton");
    const bookingSummary = document.getElementById("bookingSummary");
   
    const ticketPrices = {
        general: 80,
        vip: 150
    };

    function updateSummary() {
        const concert = concertSelect.value;
        const type = ticketType.value;
        const quantity = ticketQuantity.value;

        if (concert && type && quantity) {
            const totalPrice = ticketPrices[type] * quantity;
            
            bookingSummary.innerHTML = `
                <h2>Booking Summary</h2>
                <p>Concert: ${concert}</p>
                <p>Ticket Type: ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
                <p>Quantity: ${quantity}</p>
                <p>Total Price: $${totalPrice}</p>    
                <button>Confirm</button>
                <button>Edit Booking</button>
            `;
            bookingSummary.classList.remove("hidden");
        } else {
            bookingSummary.classList.add("hidden");
        }
    }

    concertSelect.addEventListener("change", updateSummary);
    ticketType.addEventListener("change", updateSummary);
    ticketQuantity.addEventListener("input", updateSummary);

    confirmButton.addEventListener("click", () => {
        if (!concertSelect.value || !ticketType.value || !ticketQuantity.value) {
            alert("Please fill in all required fields.");
        } else {
            alert("Booking confirmed!");
        }
    });
    
});
