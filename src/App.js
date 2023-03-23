import logo from './logo.svg';
import './App.css';
import './components/styles.css';
import AddUser from './components/user/AddUser';
import { UserList } from './components/user/UserList';
import { useState } from 'react';

function App() {
	const [list, setList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setList((prevState) => {
			return [
				...list,
				{
					id: Math.random().toString(),
					name: uName,
					age: uAge,
				},
			];
		});
	};
	return (
		<div className='App'>
			<AddUser onAddUser={addUserHandler} />
			<UserList list={list} />
		</div>
	);
}

export default App;
