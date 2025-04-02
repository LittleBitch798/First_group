import React from 'react';

export default function EthereumBanner() {
  return (
    <section className="relative w-full bg-white dark:bg-gray-900">
      {/* 大图背景，可以替换为您自己的图片地址 */}
      <div
        className="h-[500px] w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://ethereum.org/static/28214bbac883669db7beea2ecfe1ae05/31987/welcome-illustration.png")',
        }}
      >
        {/* 半透明遮罩层，可根据需要调整透明度、颜色 */}
        <div className="bg-black/20 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-wide">
              इथीरियम पर आपका स्वागत है
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              欢迎来到以太坊
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              创造应用程序和社区特性为特征的去中心化平台
            </p>
          </div>
        </div>
      </div>

      {/* 如果您想在大图下方再加一些文字或按钮，可以在这里继续布局 */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          这里可以放置一些进一步的说明，或者添加按钮、链接等操作元素，让用户继续浏览或进行交互。
        </p>
      </div>
    </section>
  );
}
