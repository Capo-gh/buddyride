import React from 'react';

const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: '1px solid #DEE2E6',
};

const Card = ({ children, image, title, padding = '24px', hoverEffect = true, ...props }) => {
    const [hovered, setHovered] = React.useState(false);

    const style = {
        ...cardStyle,
        transform: hovered && hoverEffect ? 'translateY(-4px)' : 'none',
        boxShadow: hovered && hoverEffect
            ? '0 6px 20px rgba(0, 0, 0, 0.12)'
            : cardStyle.boxShadow,
    };

    return (
        <div
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
        >
            {image && (
                <img
                    src={image}
                    alt={title || 'card image'}
                    style={{ width: '100%', objectFit: 'cover', display: 'block' }}
                />
            )}
            <div style={{ padding }}>
                {title && (
                    <h3 style={{ margin: '0 0 8px 0', color: '#343A40', fontSize: '18px', fontWeight: '600' }}>
                        {title}
                    </h3>
                )}
                {children}
            </div>
        </div>
    );
};

export default Card;