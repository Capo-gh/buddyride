import React from 'react';
import Button from '../components/shared/Button';
import { ROUTES } from '../utils/routes';

const FAQ = ({ setCurrentPage }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    React.useEffect(() => {
        const styleId = 'faq-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .faq-container { padding: 40px 20px !important; }
          .faq-title { font-size: 28px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const categories = [
        {
            label: 'For Riders',
            icon: '🛬',
            color: '#5CB1D8',
            bgColor: '#EBF5FA',
            questions: [
                {
                    q: 'Is BuddyRide really free?',
                    a: 'Yes, completely free. No hidden charges, no tips required. Our volunteers do this out of the goodness of their hearts, and our operations are funded through donations and partnerships.',
                },
                {
                    q: 'How do I book a ride?',
                    a: 'Simply go to the "Request a Ride" page, fill in your flight details and destination, and submit. We\'ll match you with a Buddy and send you a confirmation email.',
                },
                {
                    q: 'What if my flight is delayed or cancelled?',
                    a: 'No worries! Just update your request or email us at buddyrideinc@gmail.com with your new arrival details. We\'ll re-match you with a Buddy as soon as possible.',
                },
                {
                    q: 'How far in advance should I book?',
                    a: 'We recommend booking at least 48 hours before your arrival so we have time to find the best Buddy match for you. However, we\'ll do our best even with shorter notice.',
                },
                {
                    q: 'Can I book a ride for someone else?',
                    a: 'Absolutely! You can fill in the form on behalf of a friend or family member arriving as an international student. Just make sure their contact details are included.',
                },
                {
                    q: 'What countries and airports do you cover?',
                    a: 'We currently operate across major airports in Canada and the USA, including Montreal, Toronto, Vancouver, Ottawa, and more. Check our Request a Ride page for the full list of supported airports.',
                },
            ],
        },
        {
            label: 'For Buddies',
            icon: '🤝',
            color: '#9DB637',
            bgColor: '#F0F5E0',
            questions: [
                {
                    q: 'Who can become a Buddy?',
                    a: 'Any current student at a participating university can become a Buddy. You don\'t need a car — there are other ways to help too, like guiding students or helping with welcome kits.',
                },
                {
                    q: 'How much time does it take?',
                    a: 'Each ride typically takes 1–2 hours including the airport pickup and drop-off. You\'re only matched when you\'re available, so there\'s no pressure or fixed schedule.',
                },
                {
                    q: 'Is it safe to volunteer?',
                    a: 'Yes. Both riders and Buddies are verified through our platform. We provide safety guidelines and a reporting system. If anything ever feels off, you can report it immediately.',
                },
                {
                    q: 'Do I get reimbursed for gas or parking?',
                    a: 'We do our best to cover fuel and parking costs through donations. We\'ll communicate this with you before each ride so there are no surprises.',
                },
                {
                    q: 'What if I need to cancel last minute?',
                    a: 'Life happens! Just let us know as soon as possible by emailing buddyrideinc@gmail.com or using the report option on the site. We\'ll find another Buddy for the rider.',
                },
            ],
        },
        {
            label: 'For Donors & Partners',
            icon: '💚',
            color: '#5CB1D8',
            bgColor: '#EBF5FA',
            questions: [
                {
                    q: 'Where does my donation go?',
                    a: 'Your donation goes directly toward helping international students — covering fuel costs, welcome kits, platform maintenance, and community events. We keep operations lean so every dollar counts.',
                },
                {
                    q: 'Can I donate anonymously?',
                    a: 'Yes, GoFundMe allows anonymous donations. If you\'d prefer to donate directly, reach out to us at buddyrideinc@gmail.com.',
                },
                {
                    q: 'How can my company partner with BuddyRide?',
                    a: 'We\'d love to partner! Whether it\'s sponsoring rides, co-branding events, or supporting students — fill out our Partnership form and we\'ll get back to you within a few days.',
                },
                {
                    q: 'Is BuddyRide a registered nonprofit?',
                    a: 'We are currently operating as a social impact startup and are in the process of formalizing our nonprofit status. All surplus funds go directly into our mission.',
                },
            ],
        },
    ];

    const toggleIndex = (categoryIndex, questionIndex) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === key ? null : key);
    };

    // Styles
    const containerStyle = {
        padding: '60px 24px',
        maxWidth: '760px',
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

    const categoryStyle = {
        marginBottom: '40px',
    };

    const categoryHeaderStyle = (color, bgColor) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: bgColor,
        borderRadius: '10px',
        padding: '12px 18px',
        marginBottom: '14px',
        border: `1px solid ${color}33`,
    });

    const categoryIconStyle = {
        fontSize: '22px',
    };

    const categoryLabelStyle = {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1A1A1A',
    };

    const accordionItemStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        border: '1px solid #DEE2E6',
        marginBottom: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
    };

    const questionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 20px',
        cursor: 'pointer',
        userSelect: 'none',
    };

    const questionTextStyle = {
        fontSize: '15px',
        fontWeight: '600',
        color: '#1A1A1A',
        flex: 1,
        paddingRight: '16px',
    };

    const chevronStyle = (isOpen) => ({
        fontSize: '18px',
        color: '#6C757D',
        transition: 'transform 0.2s ease',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        flexShrink: 0,
    });

    const answerStyle = {
        padding: '0 20px 18px 20px',
        fontSize: '14px',
        color: '#6C757D',
        lineHeight: '1.7',
    };

    // CTA
    const ctaBoxStyle = {
        background: 'linear-gradient(135deg, #EBF5FA 0%, #F0F5E0 100%)',
        borderRadius: '20px',
        padding: '48px 36px',
        textAlign: 'center',
        border: '1px solid #DEE2E6',
        marginTop: '56px',
    };

    const ctaTitleStyle = {
        fontSize: '22px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '10px',
    };

    const ctaSubtitleStyle = {
        fontSize: '15px',
        color: '#6C757D',
        marginBottom: '24px',
        lineHeight: '1.6',
    };

    const ctaButtonsStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
    };

    return (
        <div className="faq-container" style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>❓</div>
                <h1 className="faq-title" style={titleStyle}>Frequently Asked Questions</h1>
                <p style={subtitleStyle}>Got questions? We've got answers. If you can't find what you're looking for, don't hesitate to reach out.</p>
            </div>

            {/* FAQ Categories */}
            {categories.map((category, catIndex) => (
                <div key={catIndex} style={categoryStyle}>
                    <div style={categoryHeaderStyle(category.color, category.bgColor)}>
                        <span style={categoryIconStyle}>{category.icon}</span>
                        <span style={categoryLabelStyle}>{category.label}</span>
                    </div>

                    {category.questions.map((item, qIndex) => {
                        const key = `${catIndex}-${qIndex}`;
                        const isOpen = openIndex === key;

                        return (
                            <div key={qIndex} style={accordionItemStyle}>
                                <div style={questionStyle} onClick={() => toggleIndex(catIndex, qIndex)}>
                                    <span style={questionTextStyle}>{item.q}</span>
                                    <span style={chevronStyle(isOpen)}>▼</span>
                                </div>
                                {isOpen && (
                                    <div style={answerStyle}>{item.a}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}

            {/* Still have questions CTA */}
            <div style={ctaBoxStyle}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤔</div>
                <h3 style={ctaTitleStyle}>Still have questions?</h3>
                <p style={ctaSubtitleStyle}>We're here to help. Reach out to us and we'll get back to you as soon as possible.</p>
                <div style={ctaButtonsStyle}>
                    <Button variant="primary" onClick={() => setCurrentPage(ROUTES.CONTACT)}>Contact Us</Button>
                    <Button variant="outline" onClick={() => setCurrentPage(ROUTES.REPORT)}>Report an Incident</Button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;