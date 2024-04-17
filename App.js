import Navbar from './Component/Navbar';
import Items  from './Component/Items';
import {useState} from 'react';
import { CustomItemcontext } from './itemContext';
import './App.css';



function App() {
 
  return (
   
  
        <CustomItemcontext>
      <div className="App">
      <h1>Shopping Cart</h1>
      <Navbar/>
      <Items/>
      
        </div>
      

        </CustomItemcontext>
        
     
     
    
  );
}

export default App;
