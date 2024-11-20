import './App.css';
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import SignUp from './components/SignUp'
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';
import Login from './components/Login';
function App() {
  return (
    
    <div className="App">
     <Navbar/>
     <SignUp/>
     <Login/>
     <ParkingSpace/>
     <Wallet/>
     <Fotter/>
    </div>
    
  );
}

export default App;
