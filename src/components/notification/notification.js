import React, { useContext, useEffect, useRef, useState } from 'react';
import './notification.css';
import { CartContext } from '../../context/cart-context';

/**
 * Notification component displays a notification message from CartContext
 * and allows the user to close it manually or it auto-closes after a set time.
 * @returns {JSX.Element|null} JSX for Notification component or null if not visible
 */
const Notification = () => {
    const { notification, clearNotification } = useContext(CartContext);
    const [visible, setVisible] = useState(false);
    const timerRef = useRef(null);

    /**
     * Effect to handle notification changes.
     * Sets up timer to auto-close notification after 3000ms if notification is present.
     * Cleans up timer on unmount or when notification changes to prevent memory leaks.
     */
    useEffect(() => {
        if (notification) {
            setVisible(true);
            timerRef.current = setTimeout(() => {
                clearNotification();
                setVisible(false);
            }, 3000);

            return () => {
                clearTimeout(timerRef.current);
            };
        } else {
            setVisible(false);
        }
    }, [notification, clearNotification]);

    /**
     * Closes the notification manually.
     */
    const handleNotificationClose = () => {
        clearNotification();
        setVisible(false);
    };

    /**
     * Handles mouse enter event to prevent auto-closing when hovering over the notification.
     */
    const handleMouseEnter = () => {
        clearTimeout(timerRef.current);
        setVisible(true);
    };

    /**
     * Handles mouse leave event to resume auto-closing behavior when leaving the notification area.
     */
    const handleMouseLeave = () => {
        if (notification) {
            timerRef.current = setTimeout(() => {
                clearNotification();
                setVisible(false);
            }, 3000);
        } else {
            setVisible(false);
        }
    };

    // If notification is not visible, return null to prevent rendering
    if (!visible) return null;

    // Render the notification component
    return (
        <div className="notification" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="notification-text">{notification}</p>
            <button className="notification-close" onClick={handleNotificationClose}>
                X
            </button>
        </div>
    );
};

export default Notification;
