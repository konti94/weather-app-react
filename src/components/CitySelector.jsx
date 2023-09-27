import { useState } from 'react';

function CitySelector(props) {
	const [isError, setIsError] = useState(false);

	function handleCurrentCityClick() {
		const currentCity = document.querySelector('#currentCity').value;

		const isValidCity = validateCurrentCity(currentCity);

		if (isValidCity) {
			props.setCurrentCity(currentCity);
			props.setcitySelectorIsVisible(false);
		} else {
			setIsError(true);
		}
	}

	function validateCurrentCity(city) {
		const regex = '^[a-zA-Z]+(?:[s-][a-zA-Z]+)*$';

		return city.match(regex) ? true : false;
	}

	return (
		<div className='city-selector-wrapper'>
			<h1 className='h1 mb-3'>Please enter a city</h1>
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
