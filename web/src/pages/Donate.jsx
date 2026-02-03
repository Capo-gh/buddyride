import React from 'react';
import Button from '../components/shared/Button';
import { appConfig } from '../../../shared/constants/config';

const Donate = () => {
    const [selectedTier, setSelectedTier] = React.useState(null);
    const [customAmount, setCustomAmount] = React.useState('');

    React.useEffect(() => {
        const styleId = 'donate-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .donate-container { padding: 40px 20px !important; }
          .donate-title { font-size: 28px !important; }
          .donate-tiers { grid-template-columns: 1fr !important; max-width: 420px !important; margin-left: auto !important; margin-right: auto !important; }
          .donate-impact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .donate-impact-grid { grid-template-columns: 1fr !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const tiers = [
        { amount: 5, label: 'Coffee', icon: '☕', impact: 'Covers a welcome kit for one student.' },
        { amount: 15, label: 'Supporter', icon: '🌱', impact: 'Covers fuel for one volunteer ride.' },
        { amount: 30, label: 'Champion', icon: '🌟', impact: 'Funds a student\'s first week of local guidance.' },
        { amount: 50, label: 'Hero', icon: '🦸', impact: 'Sponsors a full arrival experience for one student.' },
    ];

    const impactItems = [
        { icon: '🛣️', title: 'Fuel & Travel', desc: 'Covers volunteer driving costs so rides stay free.' },
        { icon: '🎒', title: 'Welcome Kits', desc: 'Essential items to help students settle on day one.' },
        { icon: '📱', title: 'Platform & Tech', desc: 'Keeps our website and tools running smoothly.' },
        { icon: '🎓', title: 'Events & Community', desc: 'Funds meetups and socials for riders and Buddies.' },
    ];

    const handleDonate = () => {
        window.open(appConfig.donate, '_blank');
    };

    // Styles
    const containerStyle = {
        padding: '60px 24px',
        maxWidth: '720px',
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

    // Tiers
    const tiersGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '32px',
    };

    const getTierCardStyle = (tier) => ({
        backgroundColor: selectedTier === tier.amount ? '#5CB1D8' : '#FFFFFF',
        borderRadius: '14px',
        padding: '24px 20px',
        textAlign: 'center',
        border: selectedTier === tier.amount ? '2px solid #5CB1D8' : '2px solid #DEE2E6',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: selectedTier === tier.amount ? '0 4px 16px rgba(92,177,216,0.3)' : '0 2px 8px rgba(0,0,0,0.05)',
    });

    const getTierIconStyle = () => ({
        fontSize: '32px',
        marginBottom: '8px',
    });

    const getTierAmountStyle = (tier) => ({
        fontSize: '28px',
        fontWeight: '700',
        color: selectedTier === tier.amount ? '#FFFFFF' : '#1A1A1A',
        marginBottom: '4px',
    });

    const getTierLabelStyle = (tier) => ({
        fontSize: '14px',
        fontWeight: '600',
        color: selectedTier === tier.amount ? 'rgba(255,255,255,0.85)' : '#5CB1D8',
        marginBottom: '8px',
    });

    const getTierImpactStyle = (tier) => ({
        fontSize: '13px',
        color: selectedTier === tier.amount ? 'rgba(255,255,255,0.75)' : '#6C757D',
        lineHeight: '1.5',
    });

    // Custom amount
    const customBoxStyle = {
        backgroundColor: '#F8F9FA',
        borderRadius: '14px',
        padding: '24px',
        border: '1px solid #DEE2E6',
        marginBottom: '32px',
    };

    const customLabelStyle = {
        fontSize: '15px',
        fontWeight: '600',
        color: '#343A40',
        marginBottom: '12px',
        display: 'block',
    };

    const customInputWrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0',
    };

    const currencySymbolStyle = {
        backgroundColor: '#FFFFFF',
        border: '1px solid #DEE2E6',
        borderRight: 'none',
        borderRadius: '8px 0 0 8px',
        padding: '12px 14px',
        fontSize: '16px',
        fontWeight: '600',
        color: '#343A40',
    };

    const customInputStyle = {
        flex: 1,
        padding: '12px 16px',
        border: '1px solid #DEE2E6',
        borderRadius: '0 8px 8px 0',
        fontSize: '16px',
        color: '#343A40',
        outline: 'none',
        backgroundColor: '#FFFFFF',
    };

    // Impact
    const impactSectionStyle = {
        marginBottom: '40px',
    };

    const impactTitleStyle = {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '16px',
        textAlign: 'center',
    };

    const impactGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
    };

    const impactCardStyle = {
        backgroundColor: '#F0F5E0',
        borderRadius: '12px',
        padding: '18px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        border: '1px solid #DEE2E6',
    };

    const impactIconStyle = {
        fontSize: '22px',
        flexShrink: 0,
    };

    const impactItemTitleStyle = {
        fontSize: '14px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '2px',
    };

    const impactItemDescStyle = {
        fontSize: '13px',
        color: '#6C757D',
        lineHeight: '1.4',
    };

    // Note box
    const noteBoxStyle = {
        backgroundColor: '#EBF5FA',
        borderRadius: '10px',
        padding: '16px 18px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        marginBottom: '28px',
        border: '1px solid #DEE2E6',
    };

    const noteTextStyle = {
        fontSize: '14px',
        color: '#4A95BF',
        lineHeight: '1.5',
    };

    return (
        <div className="donate-container" style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={{ fontSize: '44px', marginBottom: '12px' }}>💚</div>
                <h1 className="donate-title" style={titleStyle}>Support BuddyRide</h1>
                <p style={subtitleStyle}>Every dollar helps us give another international student a warm welcome. Pick a tier, or choose your own amount.</p>
            </div>

            {/* Note */}
            <div style={noteBoxStyle}>
                <span style={{ fontSize: '20px' }}>💡</span>
                <p style={noteTextStyle}><strong>100% of your donation</strong> goes directly toward helping international students. We keep our operations lean so your money has the most impact.</p>
            </div>

            {/* Tiers */}
            <div className="donate-tiers" style={tiersGridStyle}>
                {tiers.map((tier) => (
                    <div
                        key={tier.amount}
                        style={getTierCardStyle(tier)}
                        onClick={() => { setSelectedTier(tier.amount); setCustomAmount(''); }}
                    >
                        <div style={getTierIconStyle()}>{tier.icon}</div>
                        <div style={getTierAmountStyle(tier)}>${tier.amount}</div>
                        <div style={getTierLabelStyle(tier)}>{tier.label}</div>
                        <div style={getTierImpactStyle(tier)}>{tier.impact}</div>
                    </div>
                ))}
            </div>

            {/* Custom Amount */}
            <div style={customBoxStyle}>
                <label style={customLabelStyle}>Or choose your own amount</label>
                <div style={customInputWrapperStyle}>
                    <span style={currencySymbolStyle}>$</span>
                    <input
                        type="number"
                        min="1"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedTier(null); }}
                        style={customInputStyle}
                    />
                </div>
            </div>

            {/* Donate Button */}
            <div style={{ marginBottom: '40px' }}>
                <Button
                    variant="primary"
                    onClick={handleDonate}
                    fullWidth={true}
                    disabled={!selectedTier && !customAmount}
                >
                    Donate {selectedTier ? `$${selectedTier}` : customAmount ? `$${customAmount}` : ''} 💚
                </Button>
                <p style={{ textAlign: 'center', fontSize: '13px', color: '#ADB5BD', marginTop: '10px' }}>
                    You'll be redirected to GoFundMe to complete your donation securely.
                </p>
            </div>

            {/* What your donation does */}
            <div style={impactSectionStyle}>
                <h3 style={impactTitleStyle}>Where does your donation go?</h3>
                <div className="donate-impact-grid" style={impactGridStyle}>
                    {impactItems.map((item, i) => (
                        <div key={i} style={impactCardStyle}>
                            <span style={impactIconStyle}>{item.icon}</span>
                            <div>
                                <div style={impactItemTitleStyle}>{item.title}</div>
                                <div style={impactItemDescStyle}>{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Donate;