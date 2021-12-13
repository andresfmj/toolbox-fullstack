import { Button, Container, Navbar } from 'react-bootstrap';

const Toolbar = ({ changed, clicked }) => {
	return (
		<Navbar expand='lg' variant='light' bg='light'>
			<Container>
				<input
					type='text'
					className='form-control mx-3 outline-0'
					onChange={changed}
				/>
				<Button variant='primary' onClick={clicked}>
					Send
				</Button>
			</Container>
		</Navbar>
	);
};

export default Toolbar;
