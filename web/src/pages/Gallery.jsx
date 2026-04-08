import React from 'react';
import FadeIn from '../components/shared/FadeIn';
import photo1 from '../assets/gallery/airport-pickup-1.jpeg';
import photo2 from '../assets/gallery/airport-pickup-2.jpeg';
import photo3 from '../assets/gallery/airport-pickup-3.jpeg';
import photo4 from '../assets/gallery/buddy-and-student.jpeg';
import tripVideo from '../assets/gallery/buddyride-trip.mp4';

const photos = [
    { src: photo1, alt: 'Buddy helping student with luggage at airport' },
    { src: photo2, alt: 'Student arriving at Montreal airport with Buddy' },
    { src: photo3, alt: 'Airport pickup at YUL Montreal' },
    { src: photo4, alt: 'Buddy and student after a successful pickup' },
];

const Gallery = () => {
    const [lightbox, setLightbox] = React.useState(null);

    React.useEffect(() => {
        const styleId = 'gallery-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .gallery-container { padding: 40px 20px !important; }
          .gallery-title { font-size: 28px !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    // Close lightbox on Escape
    React.useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setLightbox(null); };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, []);

    return (
        <div className="gallery-container" style={{ padding: '60px 24px', maxWidth: '1040px', margin: '0 auto' }}>
            <FadeIn>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div style={{
                        display: 'inline-block', backgroundColor: '#EBF5FA', color: '#5CB1D8',
                        fontSize: '13px', fontWeight: '700', textTransform: 'uppercase',
                        letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '14px',
                    }}>Gallery 📸</div>
                    <h1 className="gallery-title" style={{ fontSize: '36px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>Rides in action</h1>
                    <p style={{ fontSize: '16px', color: '#6C757D', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
                        A glimpse into the moments that make BuddyRide special — real students, real arrivals, real community.
                    </p>
                </div>
            </FadeIn>

            {/* Photo grid */}
            <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginBottom: '48px' }}>
                {photos.map((photo, i) => (
                    <FadeIn key={i} delay={`${i * 0.07}s`}>
                        <div
                            onClick={() => setLightbox(i)}
                            style={{
                                borderRadius: '14px', overflow: 'hidden', cursor: 'pointer',
                                border: '1px solid #DEE2E6', aspectRatio: '3/4',
                                boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)'; }}
                        >
                            <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* Video */}
            <FadeIn delay="0.3s">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{
                        display: 'inline-block', backgroundColor: '#F0F5E0', color: '#9DB637',
                        fontSize: '13px', fontWeight: '700', textTransform: 'uppercase',
                        letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px',
                    }}>Video 🎬</div>
                </div>
                <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '1px solid #DEE2E6', maxWidth: '640px', margin: '0 auto' }}>
                    <video
                        controls
                        style={{ width: '100%', display: 'block', maxHeight: '480px', objectFit: 'cover' }}
                    >
                        <source src={tripVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </FadeIn>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.88)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 2000, padding: '24px',
                    }}
                >
                    <img
                        src={photos[lightbox].src}
                        alt={photos[lightbox].alt}
                        onClick={e => e.stopPropagation()}
                        style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '12px', objectFit: 'contain', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                    />
                    <button
                        onClick={() => setLightbox(null)}
                        style={{ position: 'fixed', top: '20px', right: '24px', background: 'none', border: 'none', color: '#FFFFFF', fontSize: '32px', cursor: 'pointer', lineHeight: 1 }}
                    >×</button>
                    {lightbox > 0 && (
                        <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: 'fixed', left: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '48px', height: '48px' }}>‹</button>
                    )}
                    {lightbox < photos.length - 1 && (
                        <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: 'fixed', right: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '48px', height: '48px' }}>›</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Gallery;
