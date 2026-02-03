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
                                <a href={appConfig.socials.linkedin} target="_blank" rel="noreferrer" style={socialIconStyle}>in</a>
                                <a href={appConfig.socials.instagram} target="_blank" rel="noreferrer" style={socialIconStyle}>ig</a>
                                <a href={appConfig.socials.tiktok} target="_blank" rel="noreferrer" style={socialIconStyle}>tk</a>
                                <a href={appConfig.socials.facebook} target="_blank" rel="noreferrer" style={socialIconStyle}>fb</a>
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