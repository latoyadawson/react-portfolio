
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
// import Header from './components/Header'

function App() {
  const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};
  
  return (
    <div className="App">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <main>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
