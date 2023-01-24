import React, { useState } from 'react';

const Child = ({ count, setCount }) => {


    return (
        <div>
            <div className='h-24 flex justify-center items-center border-double border-4 border-sky-500 mt-10 mb-5'>
                <h1 className='text-3xl text-yellow-400'>{count}</h1>
            </div>
            <div className='flex gap-5'>
                <button onClick={() => setCount(count + 1)} className="btn btn-success">Increase</button>
                <button onClick={() => setCount((prvState) => prvState - 1)} className="btn btn-error">Decrease</button>
            </div>
        </div>
    );
};
export default Child;