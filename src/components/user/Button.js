import React from 'react';

const Button = ({ type, text, onClick }) => {
	return (
		<button type={type || 'button'} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
