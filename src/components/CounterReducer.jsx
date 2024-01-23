import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment , decrement} from '../actions/index';


const CounterReducer = () => {
   
    const count=useSelector((store)=>store.IncDecReducer);
    const dispach=useDispatch();
    
  return (
<>
        <div className="container flex justify-center items-center flex-col">

          <div className="row flex justify-center items-center flex-col  mt-32 w-1/2 h-96 bg-slate-300">

          <h1 className='mb-6' style={{fontSize:"30px"}}>Recucer Counter App</h1>

        <div className='flex mt-12'>
           <button className='btn p-1 rounded h-12 bg-green-500 text-white' onClick={()=>dispach(increment())}>Increment</button>
            <h1 className='m-6 mt-2 font-serif text-xl'>Value of counter is : <span className='font-bold'>{count}</span></h1>
            <button className='btn p-1 rounded h-12 bg-red-500 text-white' onClick={()=>dispach(decrement())}>Decrement</button>
        </div>

          </div>
        </div>
</>
  )
}

export default CounterReducer;
