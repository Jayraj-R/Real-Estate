import * as React from 'react';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
	palette: {
		primary: {
			main: '#6F64EF',
		},
		secondary: {
			main: '#ff906e',
		},
		info: {
			main: '#484554',
		},
	},
});

const Layout = () => {
	return (
		<div style={{ background: '#F8F7FD', height: '100vh' }}>
			<ThemeProvider theme={theme}>
				<Navbar />
			</ThemeProvider>
		</div>
	);
};

export default Layout;
