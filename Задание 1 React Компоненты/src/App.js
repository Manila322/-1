import React, { useState } from 'react';
import './App.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите число');
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const isValueValid = value.length >= 3;

	const onAddButtonClick = () => {
		if (value.length >= 3) {
			const id = Date.now();
			const updatedList = [...list, { id, value }];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	return (
		<div className="app">
			<h1 className="page-heading">Ввод значения</h1>
			<p className="no-margin-text">Текущее значение: "{value}"</p>
			{error && <div className="error">{error}</div>}
			<div className="buttons-container">
				<button className="button" onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className="button"
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className="list-container">
				<h2 className="list-heading">Список:</h2>
				{list.length > 0 ? (
					<ul className="list">
						{list.map((item) => (
							<li key={item.id}>{item.value}</li>
						))}
					</ul>
				) : (
					<p>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
