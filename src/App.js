import './App.css';
import Brains from './Components/Map';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import Navigation from "./Components/Navigation";
import Working from './Components/Working';

function App() {
  return (
    <div className="App h-screen bg-orange-900">
      <Navigation />
      <Introduction />
      <Working />
      <Brains />
      <Footer />
    </div>
  );
}

export default App;
