// Email validation
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};

// Phone number validation (supports CA and US)
export const isValidPhone = (phone) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,6}$/;
    return phoneRegex.test(phone.trim());
};

// Check if a string is empty or just whitespace
export const isNotEmpty = (value) => {
    return value && value.trim().length > 0;
};

// Validate a full form object — returns { isValid, errors }
export const validateRideForm = (formData) => {
    const errors = {};

    if (!isNotEmpty(formData.fullName)) errors.fullName = 'Full name is required.';
    if (!isNotEmpty(formData.email)) errors.email = 'Email is required.';
    else if (!isValidEmail(formData.email)) errors.email = 'Please enter a valid email.';
    if (!isNotEmpty(formData.phone)) errors.phone = 'Phone number is required.';
    else if (!isValidPhone(formData.phone)) errors.phone = 'Please enter a valid phone number.';
    if (!isNotEmpty(formData.airport)) errors.airport = 'Please select an airport.';
    if (!isNotEmpty(formData.flightNumber)) errors.flightNumber = 'Flight number is required.';
    if (!isNotEmpty(formData.arrivalDate)) errors.arrivalDate = 'Arrival date is required.';
    if (!isNotEmpty(formData.arrivalTime)) errors.arrivalTime = 'Arrival time is required.';
    if (!isNotEmpty(formData.destination)) errors.destination = 'Destination address is required.';

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validateVolunteerForm = (formData) => {
    const errors = {};

    if (!isNotEmpty(formData.fullName)) errors.fullName = 'Full name is required.';
    if (!isNotEmpty(formData.email)) errors.email = 'Email is required.';
    else if (!isValidEmail(formData.email)) errors.email = 'Please enter a valid email.';
    if (!isNotEmpty(formData.phone)) errors.phone = 'Phone number is required.';
    else if (!isValidPhone(formData.phone)) errors.phone = 'Please enter a valid phone number.';
    if (!isNotEmpty(formData.university)) errors.university = 'Please select your university.';
    if (!isNotEmpty(formData.city)) errors.city = 'City is required.';
    if (formData.hasCar === undefined) errors.hasCar = 'Please let us know if you have a car.';

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validateContactForm = (formData) => {
    const errors = {};

    if (!isNotEmpty(formData.fullName)) errors.fullName = 'Full name is required.';
    if (!isNotEmpty(formData.email)) errors.email = 'Email is required.';
    else if (!isValidEmail(formData.email)) errors.email = 'Please enter a valid email.';
    if (!isNotEmpty(formData.message)) errors.message = 'Message is required.';

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};