import React from 'react';
import Button from './user/Button';
import ReactDOM from 'react-dom';

const BackDropOverlay = ({ setIsOpen }) => {
	return <div className='backdrop' onClick={() => setIsOpen(false)}></div>;
};
const ModalOverlay = ({ setIsOpen, error }) => {
	return (
		<div className='modal'>
			<header>{error.title}</header>
			<div>{error.message}</div>
			<footer>
				<Button text={'Okay'} onClick={() => setIsOpen(false)} />
			</footer>
		</div>
	);
};

const ErrorModal = ({ setIsOpen, error }) => {
	return (
		<>
			{ReactDOM.createPortal(<BackDropOverlay setIsOpen={setIsOpen} />, document.getElementById('backdrop-overlay'))}
			{ReactDOM.createPortal(
				<ModalOverlay setIsOpen={setIsOpen} error={error} />,
				document.getElementById('modal-overlay')
			)}
		</>
	);
};

export default ErrorModal;
