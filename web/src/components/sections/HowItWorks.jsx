import React from 'react';

const HowItWorks = () => {
    React.useEffect(() => {
        const styleId = 'how-it-works-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; gap: 24px !important; max-width: 420px !important; margin: 0 auto !important; }
          .hiw-connector { display: none !important; }
          .hiw-section-title { font-size: 28px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const sectionStyle = {
        padding: '80px 24px',
        backgroundColor: '#FFFFFF',
    };

    const containerStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const labelStyle = {
        display: 'inline-block',
        backgroundColor: '#EBF5FA',
        color: '#5CB1D8',
        fontSize: '13px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        padding: '6px 16px',
        borderRadius: '50px',
        marginBottom: '16px',
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
        maxWidth: '560px',
        margin: '0 auto 56px auto',
        lineHeight: '1.6',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr auto 1fr',
        gap: '0px',
        alignItems: 'start',
    };

    const cardStyle = {
        padding: '32px 24px',
        borderRadius: '16px',
        backgroundColor: '#F8F9FA',
        border: '1px solid #DEE2E6',
        textAlign: 'center',
        position: 'relative',
    };

    const numberCircleStyle = (color) => ({
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px auto',
        fontSize: '22px',
        fontWeight: '700',
        color: '#FFFFFF',
        boxShadow: `0 4px 12px ${color}55`,
    });

    const stepTitleStyle = {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '10px',
    };

    const stepDescStyle = {
        fontSize: '14px',
        color: '#6C757D',
        lineHeight: '1.6',
    };

    const connectorStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '56px',
    };

    const steps = [
        {
            number: '1',
            color: '#5CB1D8',
            icon: '📋',
            title: 'Book Your Ride',
            description: 'Fill out a quick form with your flight details, arrival time, and destination. Takes less than 2 minutes.',
        },
        {
            number: '2',
            color: '#9DB637',
            icon: '🤝',
            title: 'Get Matched',
            description: 'We match you with a local student volunteer — your Buddy — who speaks your language and knows the area.',
        },
        {
            number: '3',
            color: '#5CB1D8',
            icon: '🏠',
            title: 'Welcome Home',
            description: 'Your Buddy picks you up at the airport, helps you settle in, and makes sure your first day feels like home.',
        },
    ];

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={labelStyle}>How It Works</div>
                <h2 className="hiw-section-title" style={titleStyle}>Three simple steps</h2>
                <p style={subtitleStyle}>
                    From booking to arrival, we've made the process as smooth and stress-free as possible for new international students.
                </p>

                <div className="hiw-grid" style={gridStyle}>
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            {/* Step Card */}
                            <div style={cardStyle}>
                                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{step.icon}</div>
                                <div style={numberCircleStyle(step.color)}>{step.number}</div>
                                <h3 style={stepTitleStyle}>{step.title}</h3>
                                <p style={stepDescStyle}>{step.description}</p>
                            </div>

                            {/* Connector Arrow (only between cards) */}
                            {index < steps.length - 1 && (
                                <div className="hiw-connector" style={connectorStyle}>
                                    <span style={{ fontSize: '24px', color: '#ADB5BD' }}>→</span>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;