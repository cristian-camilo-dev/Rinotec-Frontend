import { PropTypes } from 'prop-types';

import LogoMovil from '../../assets/logo mobile.png';
import cerrar from '../../assets/equis-cerrar.png.png';

export const ToggleMenu = ({ cerrarToggleMenu }) => {
	const navItems = [
		{
			title: 'Categorías',
			url: '#',
		},
		{
			title: 'Todos',
			url: '#',
		},
		{
			title: 'Imperdibles',
			url: '#',
		},
	];

	return (
		<div className='container mx-auto p-4 flex flex-col relative h-screen '>
			<div className='flex justify-between mb-4'>
				<h2>Menu</h2>
				<button onClick={cerrarToggleMenu}>
					<img src={cerrar} alt='cerrar' />
				</button>
			</div>

			<hr />
			<div>
				<nav className='mt-5'>
					<ul>
						{navItems.map((item) => (
							<li className='mb-4' key={item.title}>
								<a href={item.url}>{item.title}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className='h-2/5 flex items-end'>
				<img src={LogoMovil} alt='Logo' />
			</div>
		</div>
	);
};

ToggleMenu.propTypes = {
	cerrarToggleMenu: PropTypes.func.isRequired,
};
