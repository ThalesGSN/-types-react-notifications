


# TypeScript Definitions for React-Notifications

This package provides TypeScript type definitions for the `react-notifications` library, enhancing the development experience by offering type checking and IntelliSense support in TypeScript projects.

## Installation

To install the type definitions, you can use npm or yarn. Run one of the following commands:

```bash
npm install @types/react-notifications
```

or

```bash
yarn add @types/react-notifications
```

## Usage

After installation, the type definitions can be used by simply importing `react-notifications` in your TypeScript files. TypeScript will automatically recognize the types based on your project's configuration.

Example:

```typescript
import { NotificationManager } from 'react-notifications';

NotificationManager.info('Info message', 'Title here');
```
## Type definitions

```typescript
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
```

## Contributing

Contributions are always welcome! If you would like to improve the `react-notifications-types` definitions, please feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

If you have any issues or feature requests, please [open an issue](https://github.com/yourusername/react-notifications-types/issues) on GitHub.


### Notes:
- **Adjust the username and repository URL**: Replace `@yourusername/react-notifications-types` and GitHub URLs with your actual npm username and repository details.
- **LICENSE.md Link**: Ensure you provide a valid link to your LICENSE file, typically by adding a LICENSE file in your GitHub repository.
- **Issue Tracking**: Customize the support and contribution guidelines according to how you plan to manage the project.
