import { useState } from 'react';
import axios from 'axios';

function CitySelector(props) {
	const apiKey = '73689869a5df58ba9b5f655b0fdac060';
	const {
		setCitySelectorIsVisible,
		setWeatherDashboardIsVisible,
		setCurrentWeather,
		setWeatherForecast,
	} = props;
	const [isError, setIsError] = useState(false);

	function handleCurrentCityClick() {
		const currentCity = document.querySelector('#currentCity').value;

		const isValidCity = validateCurrentCity(currentCity);

		if (isValidCity) {
			setCitySelectorIsVisible(false);
			setWeatherDashboardIsVisible(true);

			const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;
			const weatherForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&cnt=5&units=metric`;

			getCurrentWeather(currentWeatherUrl);
			getWeatherForecast(weatherForecastUrl);
		} else {
			setIsError(true);
		}
	}

	function validateCurrentCity(city) {
		const regex = '^[a-zA-Z]+(?:[s-][a-zA-Z]+)*$';

		return city.match(regex) ? true : false;
	}

	async function getCurrentWeather(currentWeatherUrl) {
		await axios
			.get(currentWeatherUrl)
			.then((response) => {
				setCurrentWeather(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async function getWeatherForecast(weatherForecastUrl) {
		await axios
			.get(weatherForecastUrl)
			.then((response) => {
				setWeatherForecast(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className='city-selector-wrapper'>
			<h1 className='h1 mb-3 text-center'>Please enter a city</h1>
			<form className='d-flex align-items-center justify-content-center'>
				<div className='form-floating me-3'>
					<input
						type='text'
						className={
							isError ? 'form-control is-invalid' : 'form-control'
						}
						id='currentCity'
						placeholder='Budapest'
					/>
					<label htmlFor='currentCity'>Current city</label>
				</div>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleCurrentCityClick}>
					GO
				</button>
			</form>
			<div
				className={
					isError
						? 'invalid-feedback d-block text-start visible'
						: 'invalid-feedback d-block text-start invisible'
				}>
				Please provide a valid city.
			</div>
		</div>
	);
}

export default CitySelector;
