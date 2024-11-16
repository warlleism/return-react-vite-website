import { useInView } from 'react-intersection-observer';
import './style.scss';
export default function SectionWrapper({ children, style }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`${style} ${inView ? 'visible' : ''}`}>
            {children}
        </div>
    );
}