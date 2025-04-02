import React, { useState } from 'react';

const CounterComponent: React.FC = () => {
    // 使用 useState 来管理计数器的状态
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen ">
            <h1 className="text-2xl font-bold mb-4">计数器</h1>
            <p className="text-xl mb-4">当前计数: {count}</p>
            <div className="flex space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={increment}
                >
                    增加
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={decrement}
                >
                    减少
                </button>
            </div>
        </div>
    );
};

export default CounterComponent;
    