import './Title.css';

export default function Title({ newUser, deleteUsers }) {
	const eventAddUser = () => {
		newUser();
	};
	const eventDeleteUsers = () => {
		deleteUsers();
	};

	return (
		<>
			<h1 className='title'>Random Users</h1>
			<div className='buttons'>
				<button
					className='btn btn-add'
					onClick={eventAddUser}
				>
					Nuevo Usuario
				</button>
				<button
					className='btn btn-delete'
					onClick={eventDeleteUsers}
				>
					Eliminar
				</button>
			</div>
		</>
	);
}