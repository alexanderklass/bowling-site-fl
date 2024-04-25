import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage.tsx';

const BasicLayout = () => {
    return (
        <main className={'flex h-screen flex-col items-center'}>
            <BackgroundImage />
            <Navbar />
            <div
                className={
                    'flex w-full items-center justify-center px-4 py-8 sm:w-[500px] md:mx-2 md:w-[700px] md:py-28 lg:w-[1000px] lg:py-24'
                }
            >
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default BasicLayout;
