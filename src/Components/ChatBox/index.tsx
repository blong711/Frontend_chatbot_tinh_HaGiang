import React from 'react';

interface ChatBoxProps {
  toggleChatBox: () => void;
  isChatBoxVisible: boolean;
}

const ChatPopup: React.FC<ChatBoxProps> = ({ toggleChatBox, isChatBoxVisible }) => {
  return (
    <div style={{ display: isChatBoxVisible ? 'block' : 'none', position: 'fixed', bottom: 0, right: '15px', border: '3px solid #f1f1f1', zIndex: 9 }} id="myForm">
      <form style={{ maxWidth: '300px', padding: '10px', backgroundColor: 'white' }} className="form-container">
      <button style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={toggleChatBox}>
          <i className="icon-close" style={{ fontSize: '24px', color: '#999' }}></i>
        </button>
        <h1>Chat</h1>
        <label htmlFor="msg"><b>Message</b></label>
        <textarea style={{ width: '100%', padding: '15px', margin: '5px 0 22px 0', border: 'none', background: '#f1f1f1', resize: 'none', minHeight: '200px' }} placeholder="Type message.." name="msg" required></textarea>
        <button style={{ backgroundColor: '#04AA6D', color: 'white', padding: '16px 20px', border: 'none', cursor: 'pointer', width: '100%', marginBottom: '10px', opacity: 0.8 }} type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default ChatPopup;
