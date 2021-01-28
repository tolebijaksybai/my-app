import './layout.css'

const Layout = ({ id, title, descr, urlBg, colorBg }) => {

	// debugger;

	return (
		<section className="root" id={id} style={{ background: colorBg, backgroundImage: `url(${urlBg}) ` }} >
			<div className="wrapper">
				<article>
					<div className="title">
						<h3>{title}</h3>
						<span className="separator"></span>
					</div>
					<div className="desc full">
						<p>{descr} </p>
					</div>
				</article>
			</div>
		</section >
	);
}

export default Layout;