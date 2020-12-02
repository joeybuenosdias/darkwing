import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('dark');

	const newValue = {
		theme,
		setTheme,
	};

	return (
		<ThemeContext.Provider value={newValue}>
			{children}
		</ThemeContext.Provider>
	);
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
