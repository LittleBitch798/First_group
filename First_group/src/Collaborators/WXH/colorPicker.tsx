import { useState } from 'react';

const colorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const [selectedColorName,setSelectedColorName] = useState('白色');
    const colorList = {
        '红色': '#ff0000',
        '绿色': '#00ff00',
        '蓝色': '#0000ff',
        '黄色': '#ffff00',
        '粉色': '#ff00ff',
        '青色': '#00ffff',
        '紫色': '#800080',
        '橙色': '#ffa500',
        '灰色': '#808080'
    };

    return (
        <view className="flex justify-center items-center min-h-screen">
            <div className="w-50 h-50 flex justify-center items-center p-6 text-center bg-white rounded-md shadow-md" style={{ backgroundColor: selectedColor }}>
                <div className="mb-4 grid grid-rows-3 grid-flow-col gap-2">
                    {Object.entries(colorList).map(([colorName, colorValue]) => (
                        <button
                            key={colorValue}
                            onClick={() =>{
                                setSelectedColor(colorValue);
                                setSelectedColorName(colorName)} }
                            className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: colorValue }}
                            aria-label={`选择 ${colorName}`}
                        />
                    ))}
                </div>
                <p className="text-gray-700">Color: {selectedColorName}</p>
            </div>
        </view>
    );
};

export default colorPicker;
    