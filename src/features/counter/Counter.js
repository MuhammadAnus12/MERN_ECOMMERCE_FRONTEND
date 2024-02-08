import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment} from './counterSlice';

export default function Counter() {
  const count = useSelector();
  const dispatch = useDispatch();
 

  return (
    <div>
      <div >       
        
      </div>
      </div>
  );
}
