import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

export interface IAnimation {
    children?: React.ReactNode;
    className?: string;
}

const FadeAnimation = ({ children, className }: IAnimation) => {
    const [ref, inView] = useInView();

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1) translateX(0)' : 'scale(0) translateX(100vw)',
        config: {
            tension: 300,
            friction: 25,
        },
    });

    return (
        <animated.div className={`w-full ${className}`} style={animation} ref={ref}>
            {children}
        </animated.div>
    );
};

export default FadeAnimation;
