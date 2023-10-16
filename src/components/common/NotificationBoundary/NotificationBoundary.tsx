import { NotificationContext, NotificationContextType } from '../../../contexts/NotificationProvider';
import { Component, PropsWithChildren } from 'react';

type NotificationBoundaryState = {
  error: Error | null;
};

class NotificationBoundary extends Component<PropsWithChildren, NotificationBoundaryState> {
  state: NotificationBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    // if (error instanceof ApiError) {
    //   if (error.code === 1402 || error.code === 1405) {
    //     throw error;
    //   }
    // }
    return { error: error };
  }

  static contextType = NotificationContext;

  componentDidCatch(error: Error): void {
    const { send } = this.context as NotificationContextType;

    send({
      type: 'error',
      message: error.message,
    });
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

export default NotificationBoundary;
