
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className='bg-[#1A0923] '>
      <div className='max-w-[1440px] lg:px-20 md:px-10 px-5 mx-auto'>
     <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
