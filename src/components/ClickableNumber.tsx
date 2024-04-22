import { Link } from 'react-router-dom';

const ClickableNumber = () => {
    return (
        <div className={'whitespace-nowrap text-center text-xs 2xl:text-base'}>
            Jetzt reservieren:{' '}
            <Link to={'tel:+49046148087676'}>
                <span className={'text-blue-600 underline'}>0461-48087676</span>
            </Link>
        </div>
    );
};

export default ClickableNumber;
