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
                    'mx-2 flex w-[300px] items-center justify-center py-10 sm:w-[500px] md:w-[700px] md:py-24 lg:w-[1000px]'
                }
            >
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default BasicLayout;
