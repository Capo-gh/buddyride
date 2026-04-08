import React from 'react';

const BecomeBuddy = () => {
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
        }
        @media (max-width: 400px) {
          .buddy-perks-grid { grid-template-columns: 1fr !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const perks = [
        { icon: '🌟', title: 'Make a Real Impact', desc: 'Be the first friendly face someone sees in a new country.' },
        { icon: '🤝', title: 'Build Community', desc: 'Connect with students from all over the world.' },
        { icon: '📜', title: 'Earn Recognition', desc: 'Get a volunteer certificate to boost your resume.' },
        { icon: '🎉', title: 'Exclusive Events', desc: 'Access Buddy-only meetups and social events.' },
    ];

    return (
        <div className="buddy-container" style={{ padding: '60px 24px', maxWidth: '1050px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🤝</div>
                <h1 className="buddy-title" style={{ fontSize: '34px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>Become a Buddy</h1>
                <p style={{ fontSize: '16px', color: '#6C757D', lineHeight: '1.6', maxWidth: '560px', margin: '0 auto' }}>
                    Join our volunteer team and be the reason a new student's first day abroad feels like home.
                </p>
            </div>

            <div className="buddy-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '36px', alignItems: 'start' }}>
                {/* Left Column */}
                <div>
                    <div style={{ borderRadius: '16px', padding: '32px', border: '1px solid #DEE2E6', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', background: 'linear-gradient(135deg, #F0F5E0, #EBF5FA)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A1A', marginBottom: '20px', textAlign: 'center' }}>Why become a Buddy?</h3>
                        <div className="buddy-perks-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {perks.map((perk, i) => (
                                <div key={i} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '20px 16px', textAlign: 'center', border: '1px solid #DEE2E6', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                                    <div style={{ fontSize: '28px', marginBottom: '8px' }}>{perk.icon}</div>
                                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#1A1A1A', marginBottom: '4px' }}>{perk.title}</div>
                                    <div style={{ fontSize: '12px', color: '#6C757D', lineHeight: '1.5' }}>{perk.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#EBF5FA', borderRadius: '12px', padding: '20px', marginTop: '20px', border: '1px solid #DEE2E6' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#5CB1D8', marginBottom: '10px' }}>What happens after you sign up?</h4>
                        {[
                            'We review your application and verify your student status.',
                            "You'll get a short onboarding email with your volunteer portfolio details, guidelines, and safety tips. Then you're part of the team!",
                        ].map((step, i) => (
                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: i === 0 ? '10px' : 0 }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#5CB1D8', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', flexShrink: 0 }}>{i + 1}</div>
                                <p style={{ fontSize: '13px', color: '#343A40', lineHeight: '1.5', paddingTop: '2px', margin: 0 }}>{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column — Google Form */}
                <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #DEE2E6' }}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScODRlIHEHnw2HxxXr5neUDo785qcIJIyerhIImsPgI_xe3fw/viewform?embedded=true"
                        width="100%"
                        height="1400"
                        title="Become a Buddy"
                        style={{ display: 'block', border: 0, margin: 0 }}
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default BecomeBuddy;
