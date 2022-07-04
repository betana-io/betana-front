import { Navbar, Home } from './components';

function App(): JSX.Element {

  return (
    <>
      <div className='flex bg-betana_sky_blue'>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </>
  );
  
}

export default App;
