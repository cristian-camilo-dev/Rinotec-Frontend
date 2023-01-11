import { useState } from 'react';
import { HeaderMenu } from './HeaderMenu.jsx';

import { ToggleMenu } from './ToggleMenu.jsx';

export const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [cerrarMenu, setCerraMenu] = useState(false);

	const cerrarToggleMenu = () => {
		setCerraMenu(!cerrarMenu);
		setMenuIsOpen(!menuIsOpen);
	};

	const toggleMenuNav = () => {
		setMenuIsOpen(!menuIsOpen);
	};
	return (
		<header className='border-b-2 shadow-md'>
			{!menuIsOpen && <HeaderMenu toggleMenuNav={toggleMenuNav} />}

			{menuIsOpen && <ToggleMenu cerrarToggleMenu={cerrarToggleMenu} />}
		</header>
	);
};
