import React from 'react';

import {
	Routes,
	Route
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'

export default function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}
