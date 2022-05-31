import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./components/Header.js";
import MainRoutes from './routes';

export default function App() {
	return (
		<Router>
			<Header />
			<MainRoutes />
		</Router>
	);
}

