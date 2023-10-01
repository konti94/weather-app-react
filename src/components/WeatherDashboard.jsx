function WeatherDashboard(props) {
	const {
		setCitySelectorIsVisible,
		setWeatherDashboardIsVisible,
		currentWeather,
		weatherForecast,
	} = props;
	let currentWeatherIconName;
	let currentWeatherDesc;

	console.log('currentWeather', currentWeather);
	console.log('weatherForecast', weatherForecast);

	function handleBackClick() {
		setCitySelectorIsVisible(true);
		setWeatherDashboardIsVisible(false);
	}

	currentWeather.weather?.forEach((item) => {
		selectCurrentWeatherIcon(item);
		currentWeatherDesc = item?.description;
	});

	function selectCurrentWeatherIcon(item) {
		if (item?.description.includes('cloud')) {
			currentWeatherIconName = 'cloud';
		} else if (item?.description.includes('rain')) {
			currentWeatherIconName = 'rain';
		} else if (item?.description.includes('snow')) {
			currentWeatherIconName = 'snow';
		} else if (item?.description.includes('freeze')) {
			currentWeatherIconName = 'freeze';
		} else if (item?.description.includes('storm')) {
			currentWeatherIconName = 'storm';
		} else {
			currentWeatherIconName = 'sun';
		}
	}

	return (
		<>
			<button
				type='button'
				className='btn btn-link'
				onClick={handleBackClick}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					className='bi bi-chevron-double-left'
					viewBox='0 0 16 16'>
					<path
						fillRule='evenodd'
						d='M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
					/>
					<path
						fillRule='evenodd'
						d='M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
					/>
				</svg>
				Back
			</button>
			<div className='weather-dashboard'>
				<div className='current-box'>
					<h2>{currentWeather?.name}</h2>
					<div className='current-desc'>{currentWeatherDesc}</div>
					<img
						className='current-icon'
						src={`/assets/icons/${currentWeatherIconName}.png`}
						alt=''
					/>
					<div className='d-flex align-items-center justify-content-between'>
						<span></span>
						<span>{currentWeather?.main?.temp}</span>
						<span>{currentWeather?.wind?.speed * 3.6}</span>
					</div>
				</div>
				<div className='forecast-box'></div>
			</div>
		</>
	);
}

export default WeatherDashboard;
