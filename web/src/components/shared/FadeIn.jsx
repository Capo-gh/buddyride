import React from 'react';

/**
 * FadeIn — wraps children in a div that fades + slides up into view
 * when it enters the viewport. Uses IntersectionObserver (no library needed).
 *
 * Props:
 *   delay  — CSS transition-delay string, e.g. '0.1s', '0.3s'  (default '0s')
 *   style  — extra inline styles on the wrapper div
 */
const FadeIn = ({ children, delay = '0s', style = {} }) => {
    const ref = React.useRef(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
