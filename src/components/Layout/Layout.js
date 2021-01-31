import layout from './layout.module.css';

const Layout = ({ id, title, urlBg, colorBg, ...props }) => {

	// debugger;

	return (
		<section className={layout.root} id={id} style={{ background: colorBg, backgroundImage: `url(${urlBg}) ` }} >
			<div className={layout.wrapper}>
				<article>
					<div className={layout.title}>
						<h3>{title}</h3>
						<span className={layout.separator}></span>
					</div>
					<div className={layout.desc, layout.full}>
						{props.children}
					</div>
				</article>
			</div>
		</section >
	);
}

export default Layout;