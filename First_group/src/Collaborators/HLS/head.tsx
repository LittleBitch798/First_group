import React from 'react';

export default function EthereumBanner() {
  return (
    <section className="w-full w-screen">
      {/* 上半部分：图片展示及鼠标悬浮效果 */}
      <div className="relative w-full h-64 md:h-[300px] lg:h-[500px] overflow-hidden group">
        <img
          src="public/photo/cat.png"
          alt="Ethereum Banner"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* 悬浮时改变遮罩层的不透明度 */}
        <div className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"></div>
      </div>

      {/* 下半部分：原有内容 */}
      <div className="max-w-5xl mx-auto px-6 py-12 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-wide hover:text-pink-500 transition-colors duration-300">
            ₍ᐢ..ᐢ₎♡ ˗ˋˏ♡ˎˊ˗ ૮(˶ᵔ ᵕ ᵔ˶)ა ૮꒰ ˶• ༝ •˶꒱ა ꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 hover:text-blue-600 transition-colors duration-300">
            欢迎来到我们的社区
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed hover:text-gray-600 transition-colors duration-300">
            我有一个苹果，我有一个杯子，啊呀，我有一个苹果杯子！
          </p>
          <p className="mt-6 text-lg hover:underline transition-all duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis quibusdam beatae cumque sunt tempora sequi quo, accusantium dolore deleniti. Placeat, odio et rem sint fugit impedit. Incidunt, voluptate temporibus.
          </p>
        </div>
      </div>
    </section>
  );
}
