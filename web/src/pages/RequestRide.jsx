import React from 'react';

const RequestRide = () => {
    React.useEffect(() => {
        const styleId = 'request-ride-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .request-ride-container { padding: 40px 20px !important; }
          .request-ride-title { font-size: 26px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    return (
        <div className="request-ride-container" style={{ padding: '60px 24px', maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🛬</div>
                <h1 className="request-ride-title" style={{ fontSize: '34px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>Request a Ride</h1>
                <p style={{ fontSize: '16px', color: '#6C757D', lineHeight: '1.6' }}>Fill in the details below and we'll match you with a Buddy.</p>
            </div>

            {/* 4-day notice */}
            <div style={{ backgroundColor: '#FFF3CD', borderRadius: '10px', padding: '14px 18px', marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'flex-start', border: '1px solid #FFC10744' }}>
                <span style={{ fontSize: '20px' }}>⏰</span>
                <p style={{ fontSize: '14px', color: '#856404', lineHeight: '1.5', margin: 0 }}>
                    <strong>Please submit your request at least 4 days before your arrival</strong> so we have time to match you with an available Buddy.
                </p>
            </div>

            {/* Free service + coverage info */}
            <div style={{ backgroundColor: '#EBF5FA', borderRadius: '10px', padding: '14px 18px', marginBottom: '28px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '20px' }}>💡</span>
                <div>
                    <p style={{ fontSize: '14px', color: '#4A95BF', lineHeight: '1.5', margin: 0 }}>This service is <strong>completely free</strong>. A volunteer Buddy will pick you up at the airport and help you settle in. No payment required.</p>
                    <p style={{ fontSize: '14px', color: '#4A95BF', lineHeight: '1.5', marginTop: '8px', marginBottom: 0 }}>
                        <strong>Currently serving:</strong> Montreal (QC) · Winnipeg (MB) · Edmonton (AB) · Guelph (ON) · Toronto (ON) · Fayetteville AR · Pullman WA · Madison WI · DeKalb IL
                    </p>
                </div>
            </div>

            {/* Google Form */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #DEE2E6' }}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf7PIlgXHzXkoPZL9MBH5bBAfE3Ej9_YaO_CUqLhoB1CziSUg/viewform?embedded=true"
                    width="100%"
                    height="1200"
                    title="Request a Ride"
                    style={{ display: 'block', border: 0, margin: 0 }}
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
};

export default RequestRide;
