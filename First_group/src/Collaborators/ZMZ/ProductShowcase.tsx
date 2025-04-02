import React, { useState } from 'react';

// 定义商品类型
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

// 定义组件的 Props 类型
type ProductShowcaseProps = {
  onClose: () => void; // 关闭弹窗的回调函数
};
// 定义一个函数式组件 ProductShowcase，接收 onClose 回调函数作为 Props。
const ProductShowcase: React.FC<ProductShowcaseProps> = () => {
    // 使用 useState 定义商品列表的状态，初始化为一个包含多个商品的数组。
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: '炫酷耳机',
      description: '高品质音效，舒适佩戴。',
      price: 299,
      image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.HJLDk9LGuAQdYMKa0MUs0QHaEK?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: '智能手表',
      description: '全天候健康监测，时尚设计。',
      price: 499,
      image: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.Q3Lw0SA6WhWzxIisDLlrhwHaFW?rs=1&pid=ImgDetMain',
    },
    {
      id: 3,
      name: '游戏键盘',
      description: 'RGB 背光，机械轴体验。',
      price: 199,
      image: 'https://img.alicdn.com/i3/2890274482/O1CN01rWS5Az1iynp5GlzVR_!!2890274482.jpg',
    },
  ]);
  // 使用 useState 定义当前选中的商品状态，初始值为 null。
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    //  页面主容器，设置背景色、布局和内边距 
    <div className="min-h-screen flex flex-col items-center justify-center p-6 w-screen">
       {/* 页面标题，使用 TailwindCSS 设置字体大小、加粗和颜色 */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">商品展示</h1>
      {/*  商品列表容器，使用网格布局，支持响应式列数 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       {/* 遍历商品列表，为每个商品生成一个卡片。点击卡片时，将该商品设置为选中状态。 */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-2">价格: ¥{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            {/* 关闭按钮 */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedProduct(null)} // 关闭当前选中商品
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              价格: ¥{selectedProduct.price}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductShowcase;