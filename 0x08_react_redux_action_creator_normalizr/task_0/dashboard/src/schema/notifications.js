import notificationsData from './notifications.json';

export function getAllNotificationsByUser(userId) {
  // Filtra las notificaciones en función del userId
  const filteredNotifications = notificationsData.filter(
    (notification) => notification.author.id === userId
  );

  return filteredNotifications;
}
