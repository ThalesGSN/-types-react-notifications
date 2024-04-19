import * as React from 'react';

export interface Notification {
    title: string;
    message: string;
    level: 'success' | 'error' | 'warning' | 'info';
    position?: 'tc' | 'tr' | 'tl' | 'bc' | 'br' | 'bl' | 'cc';
    autoDismiss?: number;
    dismissible?: boolean;
    action?: NotificationAction;
}

export interface NotificationAction {
    label: string;
    callback: () => void;
}

export interface NotificationsProps {
    notifications: Notification[];
    onRequestHide?: (notification: Notification) => void;
}

export class NotificationContainer extends React.Component<NotificationsProps> {}

export class NotificationManager {
    static create(notification: Notification): void;
    static remove(notificationId: number): void;
    static info(message: string, title?: string, timeOut?: number, onClick?: () => void, priority?: boolean): void;
    static success(message: string, title?: string, timeOut?: number, onClick?: () => void, priority?: boolean): void;
    static error(message: string, title?: string, timeOut?: number, onClick?: () => void, priority?: boolean): void;
    static warning(message: string, title?: string, timeOut?: number, onClick?: () => void, priority?: boolean): void;
}
