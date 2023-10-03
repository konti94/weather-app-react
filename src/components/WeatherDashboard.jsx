function WeatherDashboard(props) {
	const {
		setCitySelectorIsVisible,
		setWeatherDashboardIsVisible,
		currentWeather,
		weatherForecast,
	} = props;
	let currentWeatherDesc;

	function handleBackClick() {
		setCitySelectorIsVisible(true);
		setWeatherDashboardIsVisible(false);
	}

	currentWeather.weather?.forEach((item) => {
		currentWeatherDesc = item?.description;
	});

	function selectCurrentWeatherIcon(item) {
		let weatherIconName;

		item.weather?.forEach((weather) => {
			if (weather?.description.includes('cloud')) {
				weatherIconName = 'cloud';
			} else if (weather?.description.includes('rain')) {
				weatherIconName = 'rain';
			} else if (weather?.description.includes('snow')) {
				weatherIconName = 'snow';
			} else if (weather?.description.includes('freeze')) {
				weatherIconName = 'freeze';
			} else if (weather?.description.includes('storm')) {
				weatherIconName = 'storm';
			} else {
				weatherIconName = 'sun';
			}
		});

		return weatherIconName;
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
						src={`/assets/icons/${selectCurrentWeatherIcon(
							currentWeather
						)}.png`}
						alt=''
					/>
					<div
						className='d-flex align-items-center justify-content-between'
						style={{ maxWidth: '380px', margin: 'auto' }}>
						<div className='d-flex flex-column align-items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								fill='currentColor'
								className='bi bi-cloud-drizzle mb-2'
								viewBox='0 0 16 16'>
								<path d='M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z' />
							</svg>
							{currentWeather?.rain
								? currentWeather?.rain['1h']
								: 0}{' '}
							mm/h
						</div>
						<div className='fs-1'>
							{Math.round(currentWeather?.main?.temp)} &#8451;
						</div>
						<div className='d-flex flex-column align-items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								fill='currentColor'
								className='bi bi-wind mb-2'
								viewBox='0 0 16 16'>
								<path d='M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z' />
							</svg>
							{Math.round(currentWeather?.wind?.speed * 3.6)} km/h
						</div>
					</div>
				</div>
				<div className='forecast-box'>
					{weatherForecast?.list?.map((item, i) => {
						return (
							<div className='forecast-item' key={i}>
								<div className='forecast-card'>
									<img
										className='current-icon'
										src={`/assets/icons/${selectCurrentWeatherIcon(
											item
										)}.png`}
										alt=''
									/>
									<span>
										{Math.round(item?.main?.temp)} &#8451;
									</span>
								</div>
								<div className='dayname'>
									{new Date(
										item?.dt * 1000
									).toLocaleDateString('en', {
										weekday: 'long',
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default WeatherDashboard;
