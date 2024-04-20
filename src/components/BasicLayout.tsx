import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage.tsx';

const BasicLayout = () => {
    return (
        <main className={'flex h-screen flex-col items-center'}>
            <BackgroundImage />
            <Navbar />
            <div className={'flex w-[340px] items-center justify-center py-10 md:w-[1000px] md:py-24'}>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default BasicLayout;
