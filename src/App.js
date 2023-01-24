
import { Button } from '@mui/material';
import './App.css';
import HeroSection from './Components/HeroSection'
import Header from './Components/Header';
import Signup from './Components/Signup';
import { Center, Container } from './Components/Utils';

function App() {
  return (
    <>
    <Header />
    <Center>
      {/* <HeroSection /> */}
      <Signup />
    </Center>
    </>
  );
}



export default App;
