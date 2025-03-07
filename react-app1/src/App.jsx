import React, {useEffect, useState} from 'react';
import useWebSocket from 'react-use-websocket';

const SOCKET_URL = 'ws://localhost:8080';

const App = () => {
	const [message, setMessage] = useState('');
	const [receivedMessage, setReceivedMessage] = useState('');
	const {sendMessage, lastMessage} = useWebSocket(SOCKET_URL, {share: true});

	useEffect(() => {
		if (lastMessage) {
			if (lastMessage.data instanceof Blob) {
				lastMessage.data.text().then((text) => setReceivedMessage(text));
			} else {
				setReceivedMessage(lastMessage.data);
			}
		}
	}, [lastMessage]);

	return (
		<div>
			<h2>App React 1</h2>
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Écris un message..."
			/>
			<button onClick={() => sendMessage(message)}>Envoyer</button>
			<h3>Dernier message reçu :</h3>
			<p>
				<p>{receivedMessage || 'Aucun message reçu'}</p>
			</p>
		</div>
	);
};

export default App;
