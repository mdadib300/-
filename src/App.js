import './App.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import Pricing from './components/Pricing/Pricing';

function App() {
  const [open, setOpen] = useState(false);
  const routes = [
    {id:1, name:'হোম', path:'/home'},
    {id:2, name:'অর্ডার', path:'/home'},
    {id:3, name:'প্রোডাক্টস', path:'/home'},
    {id:4, name:'কন্টাক্ট', path:'/home'},
    {id:5, name:'এবাউট', path:'/home'},
  ]
  return (
    <div className="App">
      <nav className='bg-slate-800 text-white w-full'>
      <div onClick={()=>{setOpen(!open)}} className="text-white h-10 w-8 lg:hidden md:hidden">
        {
          open ? <XMarkIcon/> : <Bars3Icon/>
        }
      </div>
        <ul className={`bg-slate-800 text-white w-full md:flex lg:flex justify-center md:static lg:static absolute duration-500 ease-in ${open ? 'top-10' : 'top-[-500px]'}`}>
          {
            routes.map(route=><li className='ml-5 m-5' key={route.id}>
              <a href={route.path}>{route.name}</a>
            </li>)
          }
        </ul>
      </nav>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
