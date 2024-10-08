# Concert Ticket Booking System

## Overview
The Concert Ticket Booking System allows users to select concert dates, venues, ticket types, and quantities. Users can review their selections in a booking summary and receive validation messages if required fields are missing. This project aims to provide a seamless and user-friendly experience for concert-goers.

## Features
- **Concert Date and Venue Selection**: Users can choose from a list of concert dates and venues.
- **Ticket Type and Quantity Selection**: Users can select between General Admission and VIP tickets, as well as specify the number of tickets.
- **Dynamic Booking Summary**: The booking summary updates in real-time as users make their selections.
- **Form Validation**: Users receive error messages for any missing required fields before confirming their booking.

## User Stories
1. **Concert Date and Venue Selection**: Users can select a concert date and venue, and these details will be displayed in the booking summary.
2. **Ticket Type and Quantity Selection**: Users can choose a ticket type and quantity, with total price calculations based on their selections.
3. **View Booking Summary**: Users can see a summary of their booking with concert details, ticket type, quantity, and total price.
4. **Form Validation and Error Handling**: The system validates input and prevents booking confirmation if required fields are incomplete.

## Acceptance Criteria
- **Concert Date and Venue Selection**: Users must select a concert date and venue before proceeding.
- **Ticket Type and Quantity Selection**: The system calculates total price based on selected ticket type and quantity (General Admission – $80, VIP – $150).
- **Booking Summary**: Displays correct details (date, venue, ticket type, quantity, and price) and updates dynamically.
- **Form Validation**: Users cannot confirm booking without filling all required fields, and error messages are displayed as needed.

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript
