import React from 'react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import { validateVolunteerForm } from '../../../shared/utils/validation';
import emailjs from '@emailjs/browser';

const universityOptions = [
    { value: 'mcgill', label: 'McGill University' },
    { value: 'concordia', label: 'Concordia University' },
    { value: 'udem', label: 'Université de Montréal' },
    { value: 'uqam', label: 'UQAM' },
    { value: 'ets', label: 'École de technologie supérieure (ÉTS)' },
    { value: 'toronto', label: 'University of Toronto' },
    { value: 'uottawa', label: 'University of Ottawa' },
    { value: 'carleton', label: 'Carleton University' },
    { value: 'other', label: 'Other' },
];

const cityOptions = [
    { value: 'montreal', label: 'Montreal' },
    { value: 'toronto', label: 'Toronto' },
    { value: 'ottawa', label: 'Ottawa' },
    { value: 'vancouver', label: 'Vancouver' },
    { value: 'other', label: 'Other' },
];

const carOptions = [
    { value: 'yes', label: 'Yes, I have a car with valid insurance' },
    { value: 'no', label: 'No, but I can help in other ways' },
];

const BecomeBuddy = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        university: '',
        city: '',
        hasCar: undefined,
        whyVolunteer: '',
    });

    const [errors, setErrors] = React.useState({});
    const [submitted, setSubmitted] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        const styleId = 'become-buddy-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .buddy-layout { grid-template-columns: 1fr !important; }
          .buddy-perks-grid { grid-template-columns: 1fr 1fr !important; }
          .buddy-container { padding: 40px 20px !important; }
          .buddy-title { font-size: 26px !important; }
          .buddy-card { padding: 28px 20px !important; }
        }
        @media (max-width: 400px) {
          .buddy-perks-grid { grid-template-columns: 1fr !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'hasCar' ? value : value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async () => {
        const { isValid, errors: validationErrors } = validateVolunteerForm(formData);
        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);

        try {
            await emailjs.send(
                'service_eld81fl',
                'template_ddbo633',
                formData,
                'erySL5OQktOUrdOOO'
            );
            setSubmitted(true);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send your application. Please try again or email us directly at buddyride.requests@gmail.com');
        } finally {
            setSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            university: '',
            city: '',
            hasCar: undefined,
            whyVolunteer: '',
        });
        setErrors({});
        setSubmitted(false);
    };

    // Success Screen
    if (submitted) {
        return (
            <div style={{ padding: '100px 24px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ maxWidth: '480px', width: '100%' }}>
                    <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #9DB637, #5CB1D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '40px' }}>
                        🤝
                    </div>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>Welcome to the team!</h2>
                    <p style={{ fontSize: '16px', color: '#6C757D', lineHeight: '1.6', marginBottom: '32px' }}>
                        Thanks for signing up, <strong>{formData.fullName}</strong>! We'll be in touch at <strong>{formData.email}</strong> with next steps and onboarding details.
                    </p>
                    <Button variant="secondary" onClick={handleReset} fullWidth={true}>Sign Up Another Person</Button>
                </div>
            </div>
        );
    }

    // Perks data
    const perks = [
        { icon: '🌟', title: 'Make a Real Impact', desc: 'Be the first friendly face someone sees in a new country.' },
        { icon: '🤝', title: 'Build Community', desc: 'Connect with students from all over the world.' },
        { icon: '📜', title: 'Earn Recognition', desc: 'Get a volunteer certificate to boost your resume.' },
        { icon: '🎉', title: 'Exclusive Events', desc: 'Access Buddy-only meetups and social events.' },
    ];

    // Styles
    const containerStyle = {
        padding: '60px 24px',
        maxWidth: '1050px',
        margin: '0 auto',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '48px',
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
        maxWidth: '560px',
        margin: '0 auto',
    };

    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: '36px',
        alignItems: 'start',
    };

    // Left column styles
    const perksCardStyle = {
        backgroundColor: 'linear-gradient(135deg, #F0F5E0, #EBF5FA)',
        borderRadius: '16px',
        padding: '32px',
        border: '1px solid #DEE2E6',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
    };

    const perksHeaderStyle = {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const perksGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    };

    const perkItemStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        padding: '20px 16px',
        textAlign: 'center',
        border: '1px solid #DEE2E6',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    };

    const perkIconStyle = {
        fontSize: '28px',
        marginBottom: '8px',
    };

    const perkTitleStyle = {
        fontSize: '14px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '4px',
    };

    const perkDescStyle = {
        fontSize: '12px',
        color: '#6C757D',
        lineHeight: '1.5',
    };

    // How it works box
    const howBoxStyle = {
        backgroundColor: '#EBF5FA',
        borderRadius: '12px',
        padding: '20px',
        marginTop: '20px',
        border: '1px solid #DEE2E6',
    };

    const howTitleStyle = {
        fontSize: '14px',
        fontWeight: '700',
        color: '#5CB1D8',
        marginBottom: '10px',
    };

    const howStepStyle = {
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        marginBottom: '10px',
    };

    const howNumberStyle = {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: '#5CB1D8',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        fontWeight: '700',
        flexShrink: 0,
    };

    const howTextStyle = {
        fontSize: '13px',
        color: '#343A40',
        lineHeight: '1.5',
        paddingTop: '2px',
    };

    // Right column (form) styles
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
        borderBottom: '2px solid #F0F5E0',
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

    return (
        <div className="buddy-container" style={containerStyle}>
            <div style={headerStyle}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🤝</div>
                <h1 className="buddy-title" style={titleStyle}>Become a Buddy</h1>
                <p style={subtitleStyle}>Join our volunteer team and be the reason a new student's first day abroad feels like home.</p>
            </div>

            <div className="buddy-layout" style={layoutStyle}>
                {/* Left Column — Perks + How it works */}
                <div>
                    <div style={perksCardStyle}>
                        <h3 style={perksHeaderStyle}>Why become a Buddy?</h3>
                        <div className="buddy-perks-grid" style={perksGridStyle}>
                            {perks.map((perk, i) => (
                                <div key={i} style={perkItemStyle}>
                                    <div style={perkIconStyle}>{perk.icon}</div>
                                    <div style={perkTitleStyle}>{perk.title}</div>
                                    <div style={perkDescStyle}>{perk.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={howBoxStyle}>
                        <h4 style={howTitleStyle}>What happens after you sign up?</h4>
                        <div style={howStepStyle}>
                            <div style={howNumberStyle}>1</div>
                            <p style={howTextStyle}>We review your application and verify your student status.</p>
                        </div>
                        <div style={howStepStyle}>
                            <div style={howNumberStyle}>2</div>
                            <p style={howTextStyle}>You'll get a short onboarding email with guidelines and safety tips.</p>
                        </div>
                        <div style={howStepStyle}>
                            <div style={howNumberStyle}>3</div>
                            <p style={howTextStyle}>When a new student books a ride, we match them with you based on location and availability.</p>
                        </div>
                        <div style={{ ...howStepStyle, marginBottom: 0 }}>
                            <div style={howNumberStyle}>4</div>
                            <p style={howTextStyle}>You pick them up, help them settle in, and earn their gratitude forever.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column — Form */}
                <div className="buddy-card" style={cardStyle}>
                    <h3 style={sectionTitleStyle}>Personal Information</h3>
                    <Input label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Sarah Chen" error={errors.fullName} required />
                    <div style={gridStyle}>
                        <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" error={errors.email} required />
                        <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 514 123 4567" error={errors.phone} required />
                    </div>

                    <div style={dividerStyle}></div>

                    <h3 style={sectionTitleStyle}>Student Details</h3>
                    <div style={gridStyle}>
                        <Input label="University" name="university" value={formData.university} onChange={handleChange} placeholder="Select university" options={universityOptions} error={errors.university} required />
                        <Input label="City" name="city" value={formData.city} onChange={handleChange} placeholder="Select city" options={cityOptions} error={errors.city} required />
                    </div>

                    <div style={dividerStyle}></div>

                    <h3 style={sectionTitleStyle}>Availability</h3>
                    <Input label="Do you have a car?" name="hasCar" value={formData.hasCar || ''} onChange={handleChange} placeholder="Select an option" options={carOptions} error={errors.hasCar} required />
                    <Input label="Why do you want to volunteer?" type="textarea" name="whyVolunteer" value={formData.whyVolunteer} onChange={handleChange} placeholder="Tell us what motivates you..." />

                    <div style={{ marginTop: '32px' }}>
                        <Button variant="secondary" onClick={handleSubmit} fullWidth={true} disabled={submitting}>
                            {submitting ? 'Sending...' : 'Join as a Buddy 🤝'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeBuddy;