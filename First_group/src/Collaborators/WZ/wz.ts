import React, { useState } from 'react';

{/* <MyButton 
text="点击我" 
onClick={() => console.log('按钮被点击')} 
/>  */}


interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const MyButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        // 更新点击次数
        setClickCount(prevCount => prevCount + 1); 

        // 如果 onClick 存在，则调用
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleClick}
        >
            {text} - 点击次数: {clickCount}
        </button>
    );
};

export default MyButton;