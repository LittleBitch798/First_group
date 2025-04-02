import { useState } from 'react';

// 样式类型定义
interface MessageBoardStyles {
  container: React.CSSProperties;  //最外层容器c
  inputSection: React.CSSProperties;  //输入区域的背景色
  textarea: React.CSSProperties;  //文本输入框
  emojiContainer: React.CSSProperties;  //表情选择栏
  emoji: React.CSSProperties;  //表情符号
  selectedEmoji: React.CSSProperties;  //选中的表情符号c
  publishControls: React.CSSProperties; //发布按钮容器
  publishButton: React.CSSProperties;   //发布按钮
  messagesContainer: React.CSSProperties;  //留言列表容器
  messageCard: React.CSSProperties;   //留言卡片
  deleteButton: React.CSSProperties;   //删除按钮
  msgEmoji: React.CSSProperties;   //已发布留言中的表情
  messageText: React.CSSProperties;   //留言文字内容
}

const styles: MessageBoardStyles = {
  container: {
    maxWidth: '1200px',
    margin: '60px auto',
    fontFamily: 'Arial, sans-serif'
  },
  inputSection: {
    backgroundColor: 'gold',
    padding: '20px',
    borderRadius: '8px'
  },
  textarea: {
    width: '100%',
    height: '80px',
    marginBottom: '10px',
    padding: '10px',
    resize: 'vertical'
  },
  emojiContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '10px'
  },
  emoji: {
    cursor: 'pointer',
    fontSize: '20px',
    padding: '4px',
    borderRadius: '4px'
  },
  selectedEmoji: {
    backgroundColor: 'white'
  },
  publishControls: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  },
  publishButton: {
    padding: '8px 20px',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  messagesContainer: {
    marginTop: '20px'
  },
  messageCard: {
    position: 'relative',
    backgroundColor: 'orange',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  deleteButton: {
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    fontSize: '16px',
    lineHeight: '24px'
  },
  msgEmoji: {
    fontSize: '24px',
    marginRight: '8px'
  },
  messageText: {
    margin: '8px 0'
  }
} as const;

const MessageBoard = () => {
  // 状态管理
  const [messages, setMessages] = useState<Array<{
    id: number;
    text: string;
    emoji: string;
  }>>([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  // 预定义表情列表
  const emojis = ['😀', '😂', '😍', '😎', '🤔', '👍', '👏', '🎉'];

  // 发布留言处理
  const handlePublish = () => {
    if (!newMessage.trim()) return; // 空内容校验
    
    const newMsg = {
      id: Date.now(),
      text: newMessage,
      emoji: selectedEmoji
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
    setSelectedEmoji('');
  };

  // 删除留言处理
  const handleDelete = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id));   //从消息列表中删除指定ID的留言 
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputSection}>
        {/* 留言输入框 */}
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="输入留言..."
          style={styles.textarea}
        />
        
        {/* 表情选择区域 */}
        <div style={styles.emojiContainer}>
          {emojis.map(emoji => (
            <span
              key={emoji}
              onClick={() => setSelectedEmoji(emoji)}         //当用户点击表情时(触发setSelectedEmoji更新)，触发箭头函数，将当前表情符号 emoji 设为选中状态
              style={selectedEmoji === emoji ? 
                {...styles.emoji, ...styles.selectedEmoji} : 
                styles.emoji}
            >                                 
              {emoji}
            </span>
          ))}
        </div>

        {/* 发布控制区域 */}
        <div style={styles.publishControls}>
          {/* 发布按钮 */}
          <button 
            onClick={handlePublish}
            style={styles.publishButton}
            disabled={!newMessage.trim()} // 禁用空内容发布
          >
            发布
          </button>
        </div>
      </div>

      {/* 留言展示区域 */}
      <div style={styles.messagesContainer}>
        {messages.map(msg => (
          <div key={msg.id} style={styles.messageCard}>
            {/* 删除按钮 */}
            <button 
              onClick={() => handleDelete(msg.id)}
              style={styles.deleteButton}
            >
              ×
            </button>
            
            {/* 留言内容 */}
            {msg.emoji && <span style={styles.msgEmoji}>{msg.emoji}</span>}
            <p style={styles.messageText}>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;