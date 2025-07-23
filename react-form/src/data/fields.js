export const fields = [
  // 1. Traveler Info
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Full Name",
    required: true,
    pattern: "^[A-Za-z ]+$",
    requiredErrorMessage: "Full name is required."
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Email Address",
    required: true,
    requiredErrorMessage: "Valid email is required.",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "123-456-7890",
    required: true,
    pattern: "^[0-9]{3}-[0-9]{3}-[0-9]{4}$",
    requiredErrorMessage: "Phone number must be in format 123-456-7890"
  },
  {
    name: "numberOfTravelers",
    type: "number",
    label: "Number of Travelers",
    placeholder: "1–10",
    required: true,
    min: 1,
    max: 10,
    requiredErrorMessage: "Please enter a number between 1 and 10."
  },

  // 2. Travel Dates
  {
    name: "departureDate",
    type: "date",
    label: "Departure Date",
    required: true,
    requiredErrorMessage: "Departure date is required."
  },
  {
    name: "returnDate",
    type: "date",
    label: "Return Date",
    required: true,
    requiredErrorMessage: "Return date must be after departure date."
  },

  // 3. Destination Preferences
  {
    name: "destination",
    type: "dropdown",
    label: "Select Destination",
    placeholder: "Choose a destination",
    required: true,
    options: ["Paris", "Tokyo", "Maui", "Rome", "Barcelona"],
    requiredErrorMessage: "Please select a destination."
  },
  {
    name: "preferredActivities",
    type: "checkbox",
    label: "Preferred Activities",
    required: false,
    options: ["Sightseeing", "Hiking", "Beach", "Nightlife", "Museums"]
  },

  // 4. Accommodation Details
  {
    name: "hotelRating",
    type: "radio",
    label: "Hotel Rating",
    required: true,
    options: ["3-star", "4-star", "5-star"],
    requiredErrorMessage: "Please select a hotel rating."
  },
  {
    name: "roomType",
    type: "dropdown",
    label: "Room Type",
    required: true,
    options: ["Single", "Double", "Suite"],
    placeholder: "Select Room Type"
  },
  {
    name: "specialRequests",
    type: "textarea",
    label: "Special Requests",
    placeholder: "Any special needs or requests (max 250 characters)",
    required: false,
    maxLength: 250
  },

  // 5. Flight Options
  {
    name: "flights",
    type: "radio",
    label: "Do you need flights included?",
    required: true,
    options: ["Yes", "No"],
    requiredErrorMessage: "Please select Yes or No."
  },
  {
    name: "departureAirport",
    type: "text",
    label: "Departure Airport",
    placeholder: "E.g. JFK",
    required: true,
    requiredErrorMessage: "Please enter your departure airport."
  },
  {
    name: "seatPreference",
    type: "dropdown",
    label: "Seat Preference",
    required: false,
    options: ["Window", "Aisle", "No Preference"]
  },

  // 6. Budget & Currency
  {
    name: "budget",
    type: "range",
    label: "Total Budget ($)",
    required: true,
    min: 500,
    max: 15000,
    step: 100,
    requiredErrorMessage: "Please set your budget."
  },
  {
    name: "currency",
    type: "dropdown",
    label: "Currency",
    required: true,
    options: ["USD", "EUR", "GBP"],
    requiredErrorMessage: "Please select a currency."
  },

  // 7. Travel Insurance
  {
    name: "travelInsurance",
    type: "checkbox",
    label: "Add Travel Insurance?",
    required: false
  },
  {
    name: "insurancePlan",
    type: "dropdown",
    label: "Insurance Plan",
    required: true,
    options: ["Basic", "Premium"],
    requiredErrorMessage: "Select a plan if insurance is checked."
  },

  // 8. Promo Code
  {
    name: "promoCode",
    type: "text",
    label: "Promo Code",
    placeholder: "e.g. PROMO123",
    required: false,
    pattern: "^[A-Z0-9]{6,}$",
    requiredErrorMessage: "Promo code must be uppercase letters/numbers."
  },

  // 9. Final Consent
  {
    name: "agreeTerms",
    type: "checkbox",
    label: "Agree to Terms & Conditions",
    required: true,
    requiredErrorMessage: "You must agree before submitting."
  },
  {
    name: "marketingOptIn",
    type: "checkbox",
    label: "Receive Marketing Emails",
    required: false
  }
];
