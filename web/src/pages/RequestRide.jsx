import React from 'react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import { validateRideForm } from '../../../shared/utils/validation';
import emailjs from '@emailjs/browser';

const airportOptions = [
    { value: 'YUL', label: 'Montreal – Trudeau (YUL)' },
    { value: 'YYZ', label: 'Toronto – Pearson (YYZ)' },
    { value: 'YVR', label: 'Vancouver – YVR (YVR)' },
    { value: 'YOW', label: 'Ottawa – Macdonald-Cartier (YOW)' },
    { value: 'YWG', label: 'Winnipeg – Richardson (YWG)' },
    { value: 'JFK', label: 'New York – JFK (JFK)' },
    { value: 'ORD', label: 'Chicago – O\'Hare (ORD)' },
    { value: 'LAX', label: 'Los Angeles – LAX (LAX)' },
    { value: 'MIA', label: 'Miami – MIA (MIA)' },
    { value: 'other', label: 'Other' },
];

const luggageOptions = [
    { value: '0', label: 'No luggage' },
    { value: '1', label: '1 bag/suitcase' },
    { value: '2', label: '2 bags/suitcases' },
    { value: '3', label: '3 bags/suitcases' },
    { value: '4', label: '4 bags/suitcases' },
    { value: '5+', label: '5 or more' },
];

const assistanceOptions = [
    { value: 'no', label: 'No, I don\'t need any special assistance' },
    { value: 'yes', label: 'Yes, I have a disability or special needs' },
];

const RequestRide = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        airport: '',
        otherAirport: '',
        flightNumber: '',
        arrivalDate: '',
        arrivalTime: '',
        numberOfLuggage: '',
        needsAssistance: '',
        assistanceDetails: '',
        destination: '',
        notes: '',
    });

    const [errors, setErrors] = React.useState({});
    const [submitted, setSubmitted] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        const styleId = 'request-ride-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .request-ride-container { padding: 40px 20px !important; }
          .request-ride-card { padding: 28px 20px !important; }
          .request-ride-title { font-size: 26px !important; }
          .request-ride-grid { grid-template-columns: 1fr !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async () => {
        const { isValid, errors: validationErrors } = validateRideForm(formData);
        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);

        try {
            await emailjs.send(
                'service_eld81fl',
                'template_e3lxla2',
                formData,
                'erySL5OQktOUrdOOO'
            );
            setSubmitted(true);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send your request. Please try again or email us directly at buddyride.requests@gmail.com');
        } finally {
            setSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            airport: '',
            otherAirport: '',
            flightNumber: '',
            arrivalDate: '',
            arrivalTime: '',
            numberOfLuggage: '',
            needsAssistance: '',
            assistanceDetails: '',
            destination: '',
            notes: '',
        });
        setErrors({});
        setSubmitted(false);
    };

    // Success Screen
    if (submitted) {
        return (
            <div style={{ padding: '100px 24px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ maxWidth: '480px', width: '100%' }}>
                    <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #5CB1D8, #9DB637)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '40px' }}>
                        ✓
                    </div>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>Ride Requested!</h2>
                    <p style={{ fontSize: '16px', color: '#6C757D', lineHeight: '1.6', marginBottom: '32px' }}>
                        Thank you! We've received your request and will match you with a Buddy shortly. Check your email at <strong>{formData.email}</strong> for updates.
                    </p>
                    <Button variant="primary" onClick={handleReset} fullWidth={true}>Submit Another Request</Button>
                </div>
            </div>
        );
    }

    // Form
    const containerStyle = {
        padding: '60px 24px',
        maxWidth: '680px',
        margin: '0 auto',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '40px',
    };

    const titleStyle = {
        fontSize: '34px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '10px',
    };

    const subtitleStyle = {
        fontSize: '16px',
        color: '#6C757D',
        lineHeight: '1.6',
    };

    const cardStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        border: '1px solid #DEE2E6',
    };

    const sectionTitleStyle = {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '16px',
        paddingBottom: '10px',
        borderBottom: '2px solid #EBF5FA',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0 20px',
    };

    const dividerStyle = {
        height: '1px',
        backgroundColor: '#DEE2E6',
        margin: '28px 0',
    };

    const infoBoxStyle = {
        backgroundColor: '#EBF5FA',
        borderRadius: '10px',
        padding: '14px 18px',
        marginBottom: '28px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
    };

    const infoTextStyle = {
        fontSize: '14px',
        color: '#4A95BF',
        lineHeight: '1.5',
    };

    return (
        <div className="request-ride-container" style={containerStyle}>
            <div style={headerStyle}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🛬</div>
                <h1 className="request-ride-title" style={titleStyle}>Request a Ride</h1>
                <p style={subtitleStyle}>Fill in the details below and we'll match you with a Buddy.</p>
            </div>

            <div className="request-ride-card" style={cardStyle}>
                {/* 4-day notice */}
                <div style={{ backgroundColor: '#FFF3CD', borderRadius: '10px', padding: '14px 18px', marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'flex-start', border: '1px solid #FFC10744' }}>
                    <span style={{ fontSize: '20px' }}>⏰</span>
                    <p style={{ fontSize: '14px', color: '#856404', lineHeight: '1.5', margin: 0 }}>
                        <strong>Please submit your request at least 4 days before your arrival</strong> so we have time to match you with an available Buddy.
                    </p>
                </div>

                {/* Free service + coverage info */}
                <div style={infoBoxStyle}>
                    <span style={{ fontSize: '20px' }}>💡</span>
                    <div>
                        <p style={infoTextStyle}>This service is <strong>completely free</strong>. A volunteer Buddy will pick you up at the airport and help you settle in. No payment required.</p>
                        <p style={{ ...infoTextStyle, marginTop: '8px', marginBottom: 0 }}>
                            <strong>Currently serving:</strong> Montreal (QC) · Winnipeg (MB) · Washington State – Pullman area (USA)
                        </p>
                    </div>
                </div>

                {/* Personal Info */}
                <h3 style={sectionTitleStyle}>Personal Information</h3>
                <Input label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Amina Johnson" error={errors.fullName} required />
                <div className="request-ride-grid" style={gridStyle}>
                    <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" error={errors.email} required />
                    <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 514 123 4567" error={errors.phone} required />
                </div>

                <div style={dividerStyle}></div>

                {/* Flight Details */}
                <h3 style={sectionTitleStyle}>Flight Details</h3>
                <div className="request-ride-grid" style={gridStyle}>
                    <Input label="Arrival Airport" name="airport" value={formData.airport} onChange={handleChange} placeholder="Select airport" options={airportOptions} error={errors.airport} required />
                    <Input label="Flight Number" type="text" name="flightNumber" value={formData.flightNumber} onChange={handleChange} placeholder="e.g. AC 123" error={errors.flightNumber} required />
                    <Input label="Arrival Date" type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} error={errors.arrivalDate} required />
                    <Input label="Arrival Time" type="time" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange} error={errors.arrivalTime} required />
                </div>
                {formData.airport === 'other' && (
                    <Input label="Please specify your airport" type="text" name="otherAirport" value={formData.otherAirport} onChange={handleChange} placeholder="e.g. Calgary International Airport (YYC)" error={errors.otherAirport} required />
                )}

                <div style={dividerStyle}></div>

                {/* Travel Details */}
                <h3 style={sectionTitleStyle}>Travel Details</h3>
                <div className="request-ride-grid" style={gridStyle}>
                    <Input label="Number of Luggage" name="numberOfLuggage" value={formData.numberOfLuggage} onChange={handleChange} placeholder="Select" options={luggageOptions} error={errors.numberOfLuggage} required />
                    <Input label="Do you need disability/special assistance?" name="needsAssistance" value={formData.needsAssistance} onChange={handleChange} placeholder="Select" options={assistanceOptions} error={errors.needsAssistance} required />
                </div>
                {formData.needsAssistance === 'yes' && (
                    <Input label="Please describe your assistance needs" type="textarea" name="assistanceDetails" value={formData.assistanceDetails} onChange={handleChange} placeholder="e.g. I use a wheelchair and need a vehicle with ramp access..." error={errors.assistanceDetails} required />
                )}

                <div style={dividerStyle}></div>

                {/* Destination */}
                <h3 style={sectionTitleStyle}>Destination</h3>
                <Input label="Destination Address" type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g. 123 Main St, Montreal, QC" error={errors.destination} required />
                <Input label="Additional Notes" type="textarea" name="notes" value={formData.notes} onChange={handleChange} placeholder="Any other info we should know about your arrival..." />

                {/* Submit */}
                <div style={{ marginTop: '32px' }}>
                    <Button variant="primary" onClick={handleSubmit} fullWidth={true} disabled={submitting}>
                        {submitting ? 'Sending...' : 'Request My Ride 🛬'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RequestRide;