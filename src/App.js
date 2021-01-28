import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import bgImage_1 from './assets/img/bg3.jpg'
import bgImage_2 from './assets/img/bg1.jpg'


const color = "#000";


function App() {
	return (
		<>
			<Header title="This is title" descr="This is Description!" />
			<Layout urlBg={bgImage_1} />
			<Layout colorBg={color} />
			<Layout urlBg={bgImage_2} />
			<Footer />
		</>
	);
}

export default App;
