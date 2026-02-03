// Format a date string into a readable format e.g. "Monday, February 3, 2026"
export const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

// Format time from 24hr to 12hr e.g. "14:30" → "2:30 PM"
export const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
};

// Format phone number e.g. "5141234567" → "(514) 123-4567"
export const formatPhone = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;
    return phone;
};

// Truncate long text and add "..." e.g. truncate("Hello world", 5) → "Hello..."
export const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

// Format large numbers with commas e.g. 1000 → "1,000"
export const formatNumber = (number) => {
    return number.toLocaleString();
};