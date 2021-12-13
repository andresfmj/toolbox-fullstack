import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Toolbar from './components/Toolbar';

function App() {
	const [palindrome, setPalindrome] = useState([]);
	const [input, setInput] = useState('');

	const sendText = async () => {
		try {
			let getText = await fetch(
				`http://localhost:3000/iecho?text=${input}`
			);
			let text = await getText.json();
			if (getText.status === 200) {
				setPalindrome([...palindrome, text.text]);
			} else {
				alert(text.error);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Toolbar
				changed={(e) => setInput(e.target.value)}
				clicked={sendText}
			/>
			<Container fluid>
				<h2>Results</h2>
				<ul>
					{palindrome &&
						palindrome.map((item, index) => (
							<li key={index}>
								{item.reversed} -{' '}
								{item.isPalindrome ? 'palindrome' : ''}
							</li>
						))}
				</ul>
			</Container>
		</>
	);
}

export default App;
