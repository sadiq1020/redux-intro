import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className='h-24 flex justify-center items-center border-double border-4 border-sky-500 mt-10 mb-5'>
                <h1 className='text-3xl text-yellow-400'>{count}</h1>
            </div>
            <Child count={count} setCount={setCount}></Child>
        </div>
    );
};

export default Parent;