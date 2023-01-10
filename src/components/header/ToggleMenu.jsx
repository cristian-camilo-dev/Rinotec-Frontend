import LogoMovil from '../../assets/logo mobile.png';
import cerrar from '../../assets/equis-cerrar.png.png';

export const ToggleMenu = () => {
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
		<div className='container mx-auto p-4 flex flex-col relative '>
			<div className='flex justify-between mb-4'>
				<h2>Menu</h2>
				<img src={cerrar} alt='cerrar' />
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

			<div className='absolute -bottom-full'>
				<img src={LogoMovil} alt='Logo' />
			</div>
			
			
		</div>
	);
};
