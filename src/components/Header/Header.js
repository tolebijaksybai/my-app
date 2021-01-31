import header from './header.module.css'


const Header = ({ title, descr }) => {

	return (
		<header className={header.root}>
			<div className={header.forest}></div>
			<div className={header.container}>
				<h1>{title} </h1>
				<p>{descr}</p>
			</div>
		</header>
	);
}

export default Header;