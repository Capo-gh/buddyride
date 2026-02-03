import React from 'react';
import { appConfig } from '../../../../shared/constants/config';

const ImpactCounter = () => {
    const [counts, setCounts] = React.useState({
        ridesCompleted: 0,
        studentsHelped: 0,
        cities: 0,
        volunteers: 0,
    });
    const [hasAnimated, setHasAnimated] = React.useState(false);

    // Animate numbers counting up when section comes into view
    React.useEffect(() => {
        const styleId = 'impact-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .impact-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .impact-number { font-size: 40px !important; }
          .impact-section-title { font-size: 28px !important; }
        }
        @media (max-width: 400px) {
          .impact-grid { grid-template-columns: 1fr !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounts();
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('impact-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounts = () => {
        const duration = 1800;
        const startTime = performance.now();
        const targets = appConfig.stats;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts({
                ridesCompleted: Math.round(eased * targets.ridesCompleted),
                studentsHelped: Math.round(eased * targets.studentsHelped),
                cities: Math.round(eased * targets.cities),
                volunteers: Math.round(eased * targets.volunteers),
            });

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    };

    const sectionStyle = {
        background: 'linear-gradient(135deg, #5CB1D8 0%, #4A95BF 50%, #9DB637 100%)',
        padding: '80px 24px',
    };

    const containerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const labelStyle = {
        display: 'inline-block',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#FFFFFF',
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
        color: '#FFFFFF',
        marginBottom: '12px',
    };

    const subtitleStyle = {
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.85)',
        maxWidth: '560px',
        margin: '0 auto 56px auto',
        lineHeight: '1.6',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '24px',
    };

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(8px)',
        borderRadius: '16px',
        padding: '36px 20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
    };

    const numberStyle = {
        fontSize: '52px',
        fontWeight: '700',
        color: '#FFFFFF',
        lineHeight: '1',
        marginBottom: '8px',
    };

    const suffixStyle = {
        fontSize: '28px',
        color: 'rgba(255, 255, 255, 0.7)',
    };

    const iconStyle = {
        fontSize: '30px',
        marginBottom: '12px',
    };

    const statLabelStyle = {
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.85)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    };

    const stats = [
        { key: 'ridesCompleted', icon: '🚗', label: 'Rides Completed', suffix: '+' },
        { key: 'studentsHelped', icon: '🌍', label: 'Students Helped', suffix: '+' },
        { key: 'cities', icon: '🏙️', label: 'Cities', suffix: '' },
        { key: 'volunteers', icon: '💚', label: 'Volunteers', suffix: '+' },
    ];

    return (
        <section id="impact-section" style={sectionStyle}>
            <div style={containerStyle}>
                <div style={labelStyle}>Our Impact</div>
                <h2 className="impact-section-title" style={titleStyle}>Real rides. Real lives changed.</h2>
                <p style={subtitleStyle}>
                    Every number behind these stats is a student who didn't have to figure out a new country alone.
                </p>

                <div className="impact-grid" style={gridStyle}>
                    {stats.map((stat) => (
                        <div key={stat.key} style={cardStyle}>
                            <div style={iconStyle}>{stat.icon}</div>
                            <div className="impact-number" style={numberStyle}>
                                {counts[stat.key]}<span style={suffixStyle}>{stat.suffix}</span>
                            </div>
                            <div style={statLabelStyle}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactCounter;