import React from'react';

const PersonalProfile = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center min-h-screen">
      {/* 头像部分 */}
      <img
        src="https://example.com/your-avatar.jpg" // 替换为你的头像链接
        alt="头像"
        className="w-32 h-32 rounded-full mb-4"
      />
      {/* 标题部分 */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">你的姓名</h1>
      {/* 简介段落 */}
      <p className="text-lg text-center text-gray-700 mb-8">
        这里是你的个人简介内容，简单介绍下自己的经历、兴趣等。
      </p>
      {/* 技能列表 */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">技能</h2>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">技能1</li>
          <li className="text-gray-700">技能2</li>
          <li className="text-gray-700">技能3</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalProfile;
