import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import SignUp from './components/SignUp'
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';
function App() {
  return (
    
    <div className="App">
     <Navbar/>
     <SignUp/>
     <ParkingSpace/>
     <Wallet/>
     <Fotter/>
    </div>
    
  );
}

export default App;
