import React from 'react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

const ReportIncident = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        incidentDate: '',
        incidentTime: '',
        location: '',
        description: '',
        involved: '',
    });

    const [errors, setErrors] = React.useState({});

    React.useEffect(() => {
        const styleId = 'report-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .report-container { padding: 40px 20px !important; }
          .report-title { font-size: 28px !important; }
          .report-card { padding: 28px 20px !important; }
          .report-grid { grid-template-columns: 1fr !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const roleOptions = [
        { value: 'rider', label: 'I am a Rider' },
        { value: 'buddy', label: 'I am a Buddy (Volunteer)' },
        { value: 'witness', label: 'I am a Witness' },
        { value: 'other', label: 'Other' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = () => {
        const newErrors = {};
        if (!formData.fullName?.trim()) newErrors.fullName = 'Full name is required.';
        if (!formData.email?.trim()) newErrors.email = 'Email is required.';
        if (!formData.role) newErrors.role = 'Please select your role.';
        if (!formData.incidentDate) newErrors.incidentDate = 'Please select the date.';
        if (!formData.description?.trim()) newErrors.description = 'Please describe the incident.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Create mailto link with pre-filled data
        const subject = encodeURIComponent(`⚠️ INCIDENT REPORT - ${formData.fullName}`);
        const body = encodeURIComponent(
            `INCIDENT REPORT\n\nReported By: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nRole: ${formData.role}\n\nDate: ${formData.incidentDate}\nTime: ${formData.incidentTime || 'Not provided'}\nLocation: ${formData.location || 'Not provided'}\nPeople Involved: ${formData.involved || 'Not provided'}\n\nDescription:\n${formData.description}`
        );

        window.location.href = `mailto:buddyrideinc@gmail.com?subject=${subject}&body=${body}`;
    };

    // Styles
    const containerStyle = {
        padding: '60px 24px',
        maxWidth: '720px',
        margin: '0 auto',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '40px',
    };

    const titleStyle = {
        fontSize: '36px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '12px',
    };

    const subtitleStyle = {
        fontSize: '16px',
        color: '#6C757D',
        lineHeight: '1.6',
        maxWidth: '560px',
        margin: '0 auto',
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
        borderBottom: '2px solid #FFF3CD',
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

    // Warning box
    const warningBoxStyle = {
        backgroundColor: '#FFF3CD',
        borderRadius: '10px',
        padding: '16px 18px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        marginBottom: '28px',
        border: '1px solid #FFC107',
    };

    const warningTextStyle = {
        fontSize: '14px',
        color: '#856404',
        lineHeight: '1.5',
    };

    // Emergency box
    const emergencyBoxStyle = {
        backgroundColor: '#F8D7DA',
        borderRadius: '10px',
        padding: '16px 18px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        marginBottom: '28px',
        border: '1px solid #DC3545',
    };

    const emergencyTextStyle = {
        fontSize: '14px',
        color: '#721C24',
        lineHeight: '1.5',
        fontWeight: '600',
    };

    // Confidentiality note
    const confidentialBoxStyle = {
        backgroundColor: '#EBF5FA',
        borderRadius: '10px',
        padding: '14px 18px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        marginTop: '20px',
        marginBottom: '28px',
        border: '1px solid #DEE2E6',
    };

    const confidentialTextStyle = {
        fontSize: '13px',
        color: '#4A95BF',
        lineHeight: '1.5',
    };

    const noteBoxStyle = {
        backgroundColor: '#FFF3CD',
        borderRadius: '10px',
        padding: '14px 18px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        marginBottom: '28px',
        border: '1px solid #FFC107',
    };

    const noteTextStyle = {
        fontSize: '13px',
        color: '#856404',
        lineHeight: '1.5',
    };

    return (
        <div className="report-container" style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🛡️</div>
                <h1 className="report-title" style={titleStyle}>Report an Incident</h1>
                <p style={subtitleStyle}>Your safety is our top priority. If something happened during a BuddyRide experience, please let us know so we can take action.</p>
            </div>

            <div className="report-card" style={cardStyle}>
                {/* Emergency Notice */}
                <div style={emergencyBoxStyle}>
                    <span style={{ fontSize: '20px' }}>🚨</span>
                    <p style={emergencyTextStyle}>If you are in immediate danger, please call 911 or your local emergency number right away. Do not wait.</p>
                </div>

                {/* Note about mailto */}
                <div style={noteBoxStyle}>
                    <span style={{ fontSize: '18px' }}>💡</span>
                    <p style={noteTextStyle}>Clicking "Submit Report" will open your email client with a pre-filled message. Just hit send from there to report the incident to our team.</p>
                </div>

                {/* Your Info */}
                <h3 style={sectionTitleStyle}>Your Information</h3>
                <Input label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Amina Johnson" error={errors.fullName} required />
                <div className="report-grid" style={gridStyle}>
                    <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" error={errors.email} required />
                    <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 514 123 4567" />
                </div>
                <Input label="Your Role" name="role" value={formData.role} onChange={handleChange} placeholder="Select your role" options={roleOptions} error={errors.role} required />

                <div style={dividerStyle}></div>

                {/* Incident Details */}
                <h3 style={sectionTitleStyle}>Incident Details</h3>
                <div className="report-grid" style={gridStyle}>
                    <Input label="Date of Incident" type="date" name="incidentDate" value={formData.incidentDate} onChange={handleChange} error={errors.incidentDate} required />
                    <Input label="Time of Incident" type="time" name="incidentTime" value={formData.incidentTime} onChange={handleChange} />
                </div>
                <Input label="Location" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Montreal Trudeau Airport, Terminal 1" />
                <Input label="Who was involved?" type="text" name="involved" value={formData.involved} onChange={handleChange} placeholder="e.g. Buddy name, other parties..." />

                <div style={dividerStyle}></div>

                {/* Description */}
                <h3 style={sectionTitleStyle}>What Happened?</h3>
                <Input label="Describe the incident" type="textarea" name="description" value={formData.description} onChange={handleChange} placeholder="Please describe what happened in as much detail as possible..." error={errors.description} required />

                {/* Confidentiality note */}
                <div style={confidentialBoxStyle}>
                    <span style={{ fontSize: '18px' }}>🔒</span>
                    <p style={confidentialTextStyle}>Your report is confidential. We will only share details with relevant parties if necessary to resolve the incident and ensure safety.</p>
                </div>

                {/* Submit */}
                <div style={{ marginTop: '12px' }}>
                    <Button variant="primary" onClick={handleSubmit} fullWidth={true}>Submit Report 🛡️</Button>
                </div>
            </div>
        </div>
    );
};

export default ReportIncident;