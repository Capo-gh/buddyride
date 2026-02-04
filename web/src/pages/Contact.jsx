import React from 'react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import { validateContactForm } from '../../../shared/utils/validation';
import { appConfig } from '../../../shared/constants/config';

const Contact = ({ setCurrentPage }) => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = React.useState({});

    React.useEffect(() => {
        const styleId = 'contact-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .contact-container { padding: 40px 20px !important; }
          .contact-title { font-size: 28px !important; }
          .contact-card { padding: 28px 20px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const subjectOptions = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'ride', label: 'About a Ride' },
        { value: 'volunteer', label: 'About Volunteering' },
        { value: 'donation', label: 'About Donating' },
        { value: 'partnership', label: 'Partnership' },
        { value: 'feedback', label: 'Feedback' },
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
        const { isValid, errors: validationErrors } = validateContactForm(formData);
        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        // Create mailto link with pre-filled data
        const subject = encodeURIComponent(`Contact: ${formData.subject} - ${formData.fullName}`);
        const body = encodeURIComponent(
            `Name: ${formData.fullName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:buddyrideinc@gmail.com?subject=${subject}&body=${body}`;
    };

    // Styles
    const containerStyle = {
        padding: '60px 24px',
        maxWidth: '1000px',
        margin: '0 auto',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '48px',
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

    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        gap: '36px',
        alignItems: 'start',
    };

    // Left column
    const infoCardStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '32px',
        border: '1px solid #DEE2E6',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
    };

    const infoTitleStyle = {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '20px',
    };

    const infoItemStyle = {
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        marginBottom: '24px',
    };

    const infoIconBoxStyle = (color) => ({
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        backgroundColor: color + '15',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        flexShrink: 0,
    });

    const infoItemTitleStyle = {
        fontSize: '14px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '2px',
    };

    const infoItemDescStyle = {
        fontSize: '13px',
        color: '#6C757D',
        lineHeight: '1.5',
    };

    const infoLinkStyle = {
        fontSize: '13px',
        color: '#5CB1D8',
        fontWeight: '600',
        textDecoration: 'none',
        cursor: 'pointer',
    };

    // Social links box
    const socialBoxStyle = {
        backgroundColor: '#F8F9FA',
        borderRadius: '12px',
        padding: '20px',
        marginTop: '24px',
        border: '1px solid #DEE2E6',
    };

    const socialTitleStyle = {
        fontSize: '14px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '12px',
    };

    const socialLinksStyle = {
        display: 'flex',
        gap: '10px',
    };

    const socialIconStyle = {
        width: '38px',
        height: '38px',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DEE2E6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '15px',
        textDecoration: 'none',
        color: '#343A40',
        transition: 'background-color 0.2s ease',
    };

    // Right column (form)
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
        <div className="contact-container" style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>✉️</div>
                <h1 className="contact-title" style={titleStyle}>Contact Us</h1>
                <p style={subtitleStyle}>Have a question, idea, or just want to say hi? We'd love to hear from you.</p>
            </div>

            <div className="contact-layout" style={layoutStyle}>
                {/* Left Column — Info */}
                <div>
                    <div style={infoCardStyle}>
                        <h3 style={infoTitleStyle}>Get in touch</h3>

                        <div style={infoItemStyle}>
                            <div style={infoIconBoxStyle('#5CB1D8')}>📧</div>
                            <div>
                                <div style={infoItemTitleStyle}>Email</div>
                                <a href={`mailto:${appConfig.email}`} style={infoLinkStyle}>{appConfig.email}</a>
                            </div>
                        </div>

                        <div style={infoItemStyle}>
                            <div style={infoIconBoxStyle('#9DB637')}>🕐</div>
                            <div>
                                <div style={infoItemTitleStyle}>Response Time</div>
                                <div style={infoItemDescStyle}>We usually reply within 24–48 hours.</div>
                            </div>
                        </div>

                        <div style={infoItemStyle}>
                            <div style={infoIconBoxStyle('#5CB1D8')}>📍</div>
                            <div>
                                <div style={infoItemTitleStyle}>Based In</div>
                                <div style={infoItemDescStyle}>Montreal, Canada — serving students across Canada & the USA.</div>
                            </div>
                        </div>

                        <div style={infoItemStyle}>
                            <div style={infoIconBoxStyle('#9DB637')}>🤝</div>
                            <div>
                                <div style={infoItemTitleStyle}>Partnership</div>
                                <div style={infoItemDescStyle}>Want to partner with us?</div>
                                <a href={appConfig.partnershipForm} target="_blank" rel="noreferrer" style={infoLinkStyle}>Fill out the form →</a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div style={socialBoxStyle}>
                            <div style={socialTitleStyle}>Follow us</div>
                            <div style={socialLinksStyle}>
                                <a href={appConfig.socials.linkedin} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                                </a>
                                <a href={appConfig.socials.instagram} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="Instagram">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                                </a>
                                <a href={appConfig.socials.tiktok} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="TikTok">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                                </a>
                                <a href={appConfig.socials.facebook} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="Facebook">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column — Form */}
                <div className="contact-card" style={cardStyle}>
                    <div style={noteBoxStyle}>
                        <span style={{ fontSize: '18px' }}>💡</span>
                        <p style={noteTextStyle}>Clicking "Send Message" will open your email client with a pre-filled message. Just hit send from there!</p>
                    </div>

                    <h3 style={sectionTitleStyle}>Send us a message</h3>

                    <div style={gridStyle}>
                        <Input label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Amina Johnson" error={errors.fullName} required />
                        <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" error={errors.email} required />
                    </div>

                    <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this about?" options={subjectOptions} />

                    <div style={dividerStyle}></div>

                    <Input label="Message" type="textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what's on your mind..." error={errors.message} required />

                    <div style={{ marginTop: '28px' }}>
                        <Button variant="primary" onClick={handleSubmit} fullWidth={true}>Send Message ✉️</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;