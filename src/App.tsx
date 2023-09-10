import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Lineups from './components/Lineups/Lineups';
import StatsPageContent from './components/StatsPageContent/StatsPageContent';

function App() {
	return (
		<div className="">
			<Navbar />
			<div className="my-4">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<StatsPageContent />} />
						<Route path="/lineup" element={<Lineups />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
