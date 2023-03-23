import React, { useRef, useState } from 'react';
import Card from '../Card';
import ErrorModal from '../ErrorModal';
import Button from './Button';

const AddUser = (props) => {
	// const [enteredName, setEnteredName] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState({});
	const [isOpen, setIsOpen] = useState(false);

	const nameInputRef = useRef();
	const ageeInputRef = useRef();

	const handleUserForm = (e) => {
		e.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredAge = ageeInputRef.current.value;

		if (enteredName.trim().length === 0 || enteredAge === 0) {
			setError({
				title: ' Username is required ...',
				message: 'Please Enter a Valid username',
			});
			setIsOpen(!isOpen);
			return;
		}
		//here + is added before age converts string to number
		if (+enteredAge < 18) {
			setError({
				title: 'Invalid Age',
				message: 'Please Enter age > 18',
			});
			setIsOpen(!isOpen);
			return;
		}
		props.onAddUser(enteredName, enteredAge);
		nameInputRef.current.value = '';
		ageeInputRef.current.value = '';
		// setEnteredName('');
		// setEnteredAge('');
	};

	// const handleUserName = (e) => {
	// 	setEnteredName(e.target.value);
	// };

	// const handleUserAge = (e) => {
	// 	setEnteredAge(e.target.value);
	// };

	return (
		<>
			<Card>
				<form onSubmit={handleUserForm}>
					<label htmlFor='username'>username</label>
					<input
						// value={enteredName}
						id='username'
						placeholder='enter user name'
						type='text'
						// onChange={handleUserName}
						ref={nameInputRef}
					/>
					<label htmlFor='age'>age</label>
					<input
						// value={enteredAge}
						id='age'
						placeholder='enter age'
						type='number'
						// onChange={handleUserAge}
						ref={ageeInputRef}
					/>
					<Button type={'submit'} text={'Add'} />
				</form>
			</Card>
			{isOpen && <ErrorModal error={error} setError={setError} setIsOpen={setIsOpen} />}
		</>
	);
};

export default AddUser;
