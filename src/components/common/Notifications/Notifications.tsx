import React from 'react';
import styled from 'styled-components';

import { createPortal } from 'react-dom';
import NotificationItem from './NotificationItem';
import { Notification } from '../../../contexts/NotificationProvider';

type Props = {
  notifications: Notification[];
  remove: (removeId: number) => void;
};

const Notifications = ({ notifications, remove }: Props) => {
  return createPortal(
    <Layout>
      {notifications.map((item) => (
        <NotificationItem key={item.id} {...item} remove={remove} />
      ))}
    </Layout>,
    document.getElementById('notification-root') as HTMLElement,
  );
};

export default Notifications;

const Layout = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 10px;

  transition: min-height 0.2s ease;

  width: 400px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
