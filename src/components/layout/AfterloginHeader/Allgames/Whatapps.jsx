import React, { useState } from "react";
import { Link } from "react-router-dom";

const WhatsAppChatIcons = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Hide the icons when the close button is clicked
  };

  return (
    <>
      {isVisible && (
        <div
          className="whatapp-chat-icons draggable"
          style={{ left: "8px", bottom: "80px" }}
        >
          <div className="whatapp-btn-fixed whatapp-btn-click">
            <Link to=";">
              <img
                src="assets/images/whatsapp.svg"
                alt="WhatsApp"
                className="fix_whatsup"
              />
            </Link>
            <button
              type="button"
              className="whatapp-btn-fixed"
              onClick={handleClose}
            >
              <img
                src="assets/images/close-icon.webp"
                alt="close-icon"
                className="close-item"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatIcons;
