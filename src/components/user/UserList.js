import React from 'react';

export const UserList = ({ list }) => {
	console.log(list);
	return (
		<>
			{list?.map((user, index) => (
				<ul>
					<li key={user.id}>
						{user.name} ({user.age} years old)
					</li>
				</ul>
			))}
		</>
	);
};
