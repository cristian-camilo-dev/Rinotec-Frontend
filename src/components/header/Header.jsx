import { useState } from 'react';

import menubar from '../../assets/menu.png';
import LogoMovil from '../../assets/logo mobile.png';
import corazonIcon from '../../assets/corazonIcon.png';
import carritoIcon from '../../assets/carrito.png';
import userIcon from '../../assets/userIcon.png';
import lupa from '../../assets/lupa.png';

import { ToggleMenu } from './ToggleMenu.jsx';

export const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleMenuNav = () => {
		console.log('toggleMenu');
		setMenuIsOpen(!menuIsOpen);
	};
	return (
		<header className='border-b-2 shadow-md' >
			<div className='w-full flex justify-between p-4 ' >
				<div  className='w-3/6 flex justify-around ' >
					<button onClick={toggleMenuNav}>
						<img className='w-9' src={menubar} alt='menu' />
					</button>
					<a href="#">
					 <img className='w-full' src={LogoMovil} alt='Logo' />
					</a>
					
				</div>
				<div className='w-3/6 flex justify-end '>
					<div className='flex items-center gap-2 '>

						<a href="#">
							<img className='w-8' src={lupa} alt='lupa' />
						</a>	

						<a href="#">
							<img className='w-7' src={corazonIcon} alt='corazon' />
						</a>
						<a href="#">
							<img className='w-7' src={carritoIcon} alt='carrito' />
						</a>
						<a href="#">
							<img className='w-7' src={userIcon} alt='user' />
						</a>

										

				</div>
				</div>
			</div>

			{menuIsOpen && <ToggleMenu />}
		</header>
	);
};
