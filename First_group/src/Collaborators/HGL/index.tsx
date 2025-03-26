interface Photo {
    title: string;

    description: string;
    src: string;
  }
  
  const photos: Photo[] = [
    {
      title: '星空',
      description: '一闪一闪亮晶晶',
      src: '/public/img/Night_Sky.jpg',
    },
    {
      title: '仰望',
      description: '一览众山小',
      src: '/public/img/Man.jpg',
    },
    {
      title: '晚霞',
      description: '夕阳无限好，只是近黄昏',
      src: '/public/img/sky.jpg',
    },
    {
      title: '无名山',
      description: '山不在高，有仙则名',
      src: '/public/img/land.jpg',
    },
    {
      title: '洞庭湖',
      description: '风平浪静',
      src: '/public/img/sea.jpg',
    },
    {
      title: '校园',
      description: '岁月静好',
      src: '/public/img/vvvv.png',
    },
    {
      title: '大海',
      description: '水不在深，有龙则灵',
      src: '/public/img/Reflection.jpg',
    },
    {
      title: '咏鹅',
      description: '鹅鹅鹅',
      src: '/public/img/咏鹅.webp',
    }
  ];
  export default photos;