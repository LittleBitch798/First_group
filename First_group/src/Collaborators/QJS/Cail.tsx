import React, { useState } from 'react';
import './Call.css';

const Cail = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const items = [
    { name: '野猪亨利', description: '宝宝肚肚打雷啦 打打宝宝雷雷啦 有款游戏越打越年轻 就是手机积泥胎没' },
    { name: '小学生广播体操', description: '广播体操是一项广为人知，练习者众多的体育运动。广播体操是一种徒手操，不用器械，只要有限的场地就可以开展，通常跟随广播进行锻炼，也可以用口令指挥节奏。',link: 'https://www.baidu.com/' },
    { name: '眼保健操', description: '眼保健操，是一种眼睛的保健体操，主要是通过按摩眼部穴位，调整眼及头部的血液循环，调节肌肉，改善眼的疲劳，预防近视等眼部疾病。' },
    { name: '积泥胎没', description: '迎面走来的你让我如此的蠢蠢欲动 这种感觉我从未有' },
    { name: '灰色轨迹', description: '听灰色轨迹做第一组的好人' },
    { name: 'React学习', description: '点击获取教程',link: 'https://zh-hans.react.dev/learn' },
    { name: '本节目由', description: '' },
    { name: '第一组', description: '' },
    { name: '赞助演出', description: '' },
  ];

  return (
    <div className="devtools-grid">
      <div className="filter">
        <input type="text" placeholder="请输入想要查找的关键字" />
      </div>
      <div className="grid">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid-item ${hoverIndex === index ? 'hover' : ''}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Cail;