import {createContext } from "react";
import {useState}from 'react';
import{useContext} from 'react';
import cartModal from "./Component/cartModal";

const itemContext=createContext();
function useValue(){
    const value=useContext(itemContext);
    return value;
}
function CustomItemcontext({children}){
    const [total,setTotal]=useState(0);
    const [item,setItem]=useState(0);
    const [showCart,setShowCart]=useState(false);
    const [cart,setCart]=useState([]);
    const handleAdd=(prod)=>{
        const index=cart.findIndex((item)=>item.id===prod.id);
        if(index===-1){
            setCart([...cart],{...prod,qty:1});
            setTotal(total+prod.price);
         
        }
        else{
           cart[index].qty++;
           setCart(cart);
           console.log(cart);
           setTotal(cart[index].price);
        }
        setItem(item+1);
        setTotal(total+prod.price);
       
        


    }
    const handleReset=()=>{
        setTotal(0);
        setItem(0);
    }
    const handleRemove=(price)=>{
        if(total<=0){
            return;
        }
        setTotal((prevState)=>(prevState-price));
        if(item===0){
            return;
        }
        setItem(item-1);


    }
    const toggle=()=>{
        setShowCart(!showCart);
    }

    return(<>
    <itemContext.Provider value={{total,setTotal,item,setItem,handleAdd,handleRemove,handleReset,toggle,cart}}>
    {showCart&&<cartModal toggle={toggle}/>}
        {children}
     



    </itemContext.Provider>
    </>);
}
export {itemContext,useValue};
export {CustomItemcontext};
