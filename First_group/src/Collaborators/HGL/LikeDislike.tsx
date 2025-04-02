import React, { useState } from 'react';

function LikeDislike() {
  // 使用 useState 钩子定义状态
  const [likes, setLikes] = useState(0); // 点赞数
  const [dislikes, setDislikes] = useState(0); // 点踩数

  // 增加点赞的方法
  const incrementLikes = () => setLikes(likes + 1);

  // 减少点赞的方法
  const decrementLikes = () => likes > 0 && setLikes(likes - 1);

  // 增加点踩的方法
  const incrementDislikes = () => setDislikes(dislikes + 1);

  // 减少点踩的方法
  const decrementDislikes = () => dislikes > 0 && setDislikes(dislikes - 1);

  return (
    <div style={styles.container}>
      {/* 调整标题与下方内容的间距 */}
      <h1 style={{ ...styles.title, color: '#ff69b4' }}>点赞/<span style={{ color: '#ff69b4' }}>点踩</span>组件</h1>

      {/* 插入视频，并确保其位于顶部且居中 */}
      <div style={styles.videoSection}>
        <video
          width="640"
          height="360"
          controls
          style={styles.video}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          您的浏览器不支持 video 标签。
        </video>
      </div>

      {/* 平行放置的点赞和点踩部分 */}
      <div style={styles.parallelSection}>
        {/* 点赞部分 */}
        <div style={styles.likeDislikeSection}>
          <h2>点赞 ❤️</h2>
          <p>当前点赞数: {likes}</p>
          <div style={styles.buttonGroup}>
            <button onClick={incrementLikes} style={styles.heartButton}>
              ❤️
            </button>
            <button onClick={decrementLikes} style={styles.deleteButton}>
              ✖️
            </button>
          </div>
        </div>

        {/* 点踩部分 */}
        <div style={styles.likeDislikeSection}>
          <h2>点踩 👎</h2>
          <p>当前点踩数: {dislikes}</p>
          <div style={styles.buttonGroup}>
            <button onClick={incrementDislikes} style={styles.thumbDownButton}>
              👎
            </button>
            <button onClick={decrementDislikes} style={styles.deleteButton}>
              ✖️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 样式（可选）
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '20px', // 调整标题与下方内容的间距
    fontSize: '2rem',
    color: '#333', // 默认颜色，这里被覆盖了
  },
  videoSection: {
    marginBottom: '40px', // 视频与其他元素之间的间距
  },
  video: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'inline-block', // 确保视频容器是行内块级元素以达到居中效果
  },
  parallelSection: {
    display: 'flex', // 使用 Flexbox 布局
    justifyContent: 'center', // 水平居中对齐
    gap: '40px', // 设置两个部分之间的间距
    marginBottom: '40px', // 与下方内容的间距
  },
  likeDislikeSection: {
    textAlign: 'center', // 内容居中
    padding: '20px',
    border: '1px solid #ddd', // 添加边框以区分两个部分
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 添加阴影效果
    minWidth: '200px', // 设置最小宽度
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px', // 按钮之间的间距
  },
  heartButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50%', // 圆形按钮
    background: 'linear-gradient(90deg, #ff7eb3, #c75f9e)', // 粉紫渐变色
    color: '#fff',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease-in-out', // 添加点击动画效果
    ':hover': {
      transform: 'scale(1.1)', // 鼠标悬停时放大
    },
  },
  thumbDownButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50%', // 圆形按钮
    background: 'linear-gradient(90deg, #ffc0cb, #ff69b4)', // 粉色渐变色
    color: '#fff',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease-in-out', // 添加点击动画效果
    ':hover': {
      transform: 'scale(1.1)', // 鼠标悬停时放大
    },
  },
  deleteButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50%', // 圆形按钮
    background: 'linear-gradient(90deg, #20B2AA, #00CED1)', // 青绿色渐变色
    color: '#fff',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // 添加动画效果
    boxShadow: '0 4px 8px rgba(0, 128, 128, 0.3)', // 添加青绿色阴影
    ':hover': {
      transform: 'scale(1.1)', // 鼠标悬停时放大
      boxShadow: '0 6px 12px rgba(0, 128, 128, 0.5)', // 放大时增强阴影效果
    },
  },
};

export default LikeDislike;