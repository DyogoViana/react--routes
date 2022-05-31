import React from 'react';

import {
	Routes,
	Route
} from 'react-router-dom';

import Home from './pages/Home/index.js';
import Profile from './pages/Profile/Profile.js'

export default function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}
