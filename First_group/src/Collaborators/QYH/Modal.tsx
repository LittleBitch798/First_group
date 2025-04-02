import React, { useState } from'react';
import styled from'styled-components';

// 定义模态框组件的 props 类型
interface ModalProps {
    title: string;
    content: React.ReactNode;
}

// 使用 styled-components 定义样式
const StyledModalContainer = styled.div`
    position: relative;
    display: flex;
    flex-col;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

   .background-layer {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom left, #1a237e, #4a148c, #283593);
        opacity: 0.7;
        z-index: -1; // 添加较低的 z-index
    }

   .stars {
        position: absolute;
        inset: 0;
        z-index: -1; // 添加较低的 z-index
        & > div {
            position: absolute;
            width: 3px;
            height: 3px;
            background-color: white;
            border-radius: 50%;
            opacity: 0.5;
            animation: twinkle 1s infinite;

            &:nth-child(1) {
                top: 10%;
                left: 20%;
            }
            // 可以继续添加更多星星的位置定义...
        }
    }

    @keyframes twinkle {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
`;

const StyledButton = styled.button`
    // 更浅的渐变颜色
    background: linear-gradient(90deg, #FF69B4, #ffffb3, #FFB6C1); 
    &:hover {
        // 悬停时更浅的渐变颜色变化
        background: linear-gradient(90deg, #FFB6C1, #ffffcc, #FF69B4); 
        // 悬停时增加一个轻微的缩放效果
        transform: scale(1.03); 
    }
    color: white;
    font-weight: bold;
    padding: 6px 12px; 
    border-radius: 8px; 
    // 更复杂的阴影效果，模拟立体感
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1); 
    transition: all 0.3s ease;
    outline: none;
    &:focus {
        box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.5); 
    }
    z-index: 1; 
    // 增加文字的 letter-spacing，让文字看起来更舒展
    letter-spacing: 0.5px; 
    // 增加一个轻微的 text-shadow，让文字更有层次感
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); 
`;

const Modal: React.FC<ModalProps> = ({ title, content }) => {
    // 用于控制模态框显示与隐藏的状态
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledModalContainer>
            <div className="background-layer"></div>
            <div className="stars">
                {Array.from({ length: 100 }).map((_, index) => (
                    <div
                        key={index}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 3 + 1}s infinite`,
                        }}
                    />
                ))}
            </div>
            <StyledButton onClick={() => setIsOpen(true)}>
                打开模态框
            </StyledButton>

            {isOpen && (
                <div
                    className={`fixed inset-0 bg-gradient-to-br from-blue-300 via-pink-200 to-yellow-100 bg-opacity-70 flex items-center justify-center z-50 ${
                        isOpen? 'opacity-100 visible' : 'opacity-0 invisible'
                    } transition-opacity duration-300 ease-in-out`}
                >
                    <div
                        className={`bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-3xl shadow-2xl w-96 space-y-6 ${
                            isOpen
                               ? 'scale-100 opacity-100'
                                : 'scale-90 opacity-0'
                        } transition-all duration-300 ease-in-out`}
                    >
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                            {title}
                        </h2>
                        <div className="text-gray-700 text-base">{content}</div>
                        <button
                            className="bg-gradient-to-r from-red-300 to-yellow-300 hover:from-green-200 hover:to-yellow-400 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-75"
                            onClick={() => setIsOpen(false)}
                        >
                            关闭模态框
                        </button>
                    </div>
                </div>
            )}
        </StyledModalContainer>
    );
};

export default Modal;