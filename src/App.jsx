import './App.css';
import { useState, useEffect } from 'react';
import CitySelector from './components/CitySelector';

function App() {
	const [citySelectorIsVisible, setcitySelectorIsVisible] = useState(true);
	const [currentCity, setCurrentCity] = useState('');

	console.log(currentCity);

	return (
		<div className='App'>
			<div className='container-sm vh-100 d-flex flex-column align-items-center justify-content-center'>
				{citySelectorIsVisible && (
					<CitySelector
						setCurrentCity={setCurrentCity}
						setcitySelectorIsVisible={setcitySelectorIsVisible}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
