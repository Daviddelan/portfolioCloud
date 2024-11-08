import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import David from "./components/David";
import Ohemaa from "./components/Ohemaa";
import Arnold from "./components/Arnold";
import Brian from "./components/Brian";
import Steph from "./components/Steph";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Banner />
								<Skills />
								<Projects />
								<Contact />
							</>
						}
					/>
					<Route path="/david" element={<David />} />
					<Route path="/ohemaa" element={<Ohemaa />} />
					<Route path="/arnold" element={<Arnold />} />
					<Route path="/brian" element={<Brian />} />
					<Route path="/steph" element={<Steph />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
