import { Routes, Route } from 'react-router-dom';
import BasicLayout from './components/BasicLayout.tsx';
import Start from '../src/pages/start';
import ZeitenUndPreise from './pages/zeitenUndPreise/index.tsx';
import Gastronomie from './pages/gastronomie/index.tsx';
import Veranstaltungen from './pages/veranstaltungen/index.tsx';
import Events from './pages/events/index.tsx';
import Betriebssport from './pages/betriebssport/index.tsx';
import Datenschutz from './pages/datenschutz/index.tsx';

function App() {
    return (
        <Routes>
            <Route element={<BasicLayout />}>
                <Route path="/" element={<Start />} />
                <Route path="/oeffnungszeiten-preise" element={<ZeitenUndPreise />} />
                <Route path="/gastronomie" element={<Gastronomie />} />
                <Route path="/veranstaltungen" element={<Veranstaltungen />} />
                <Route path="/events" element={<Events />} />
                <Route path="/betriebssport-freizeit" element={<Betriebssport />} />
            </Route>
            <Route path={'/datenschutz'} element={<Datenschutz />} />
        </Routes>
    );
}

export default App;
