using Cel.Esd.Domain.Notifications;
using System.Collections.Generic;
using static Cel.Esd.Domain.Notifications.NotificationHandler;

namespace Cel.Esd.Domain.Interfaces.Notifications
{
    public interface INotificationHandler
    {
        NotificationBuilder DefaultBuilder();
        List<NotificationEvent> GetAllNotifications();
        bool HasNotification();
    }
}
