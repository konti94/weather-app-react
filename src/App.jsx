import './App.css';
import { useState } from 'react';
import CitySelector from './components/CitySelector';
import WeatherDashboard from './components/WeatherDashboard';

function App() {
	const [citySelectorIsVisible, setCitySelectorIsVisible] = useState(true);
	const [weatherDashboardIsVisible, setWeatherDashboardIsVisible] =
		useState(false);
	const [currentWeather, setCurrentWeather] = useState({});
	const [weatherForecast, setWeatherForecast] = useState({});

	return (
		<div>
			<img src='' alt='' className='app-background-image d-none' />
			<div className='container-fluid vh-100 d-flex flex-column align-items-center justify-content-center'>
				<div className='container-sm'>
					{citySelectorIsVisible && (
						<CitySelector
							setCitySelectorIsVisible={setCitySelectorIsVisible}
							setWeatherDashboardIsVisible={
								setWeatherDashboardIsVisible
							}
							setCurrentWeather={setCurrentWeather}
							setWeatherForecast={setWeatherForecast}
						/>
					)}
					{weatherDashboardIsVisible && (
						<WeatherDashboard
							setCitySelectorIsVisible={setCitySelectorIsVisible}
							setWeatherDashboardIsVisible={
								setWeatherDashboardIsVisible
							}
							currentWeather={currentWeather}
							weatherForecast={weatherForecast}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
