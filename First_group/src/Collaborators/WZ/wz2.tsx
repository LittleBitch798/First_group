import React, { useState } from 'react';

interface ButtonProps {
  text: string; // 确保 text 是字符串类型
  onClick?: () => void; // onClick 是可选的回调函数
}

const MyButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  const [clickCount, setClickCount] = useState<number>(0); // 明确指定 clickCount 的类型为 number

  const handleClick = () => {
    // 更新点击次数
    setClickCount((prevCount) => prevCount + 1);

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
      {`${text} - 点击次数: ${clickCount}`} {/* 确保 text 和 clickCount 的拼接类型正确 */}
    </button>
  );
};

export default MyButton;