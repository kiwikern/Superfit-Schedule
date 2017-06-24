export function CustomListeners() {
  return (worker) => new CustomListenersImpl(worker);
}

export class CustomListenersImpl {

  setup(ops) {
  }

  constructor() {
    self.addEventListener('notificationclick', (event) => {
      console.log('On notification click: ', event);
      event.notification.close();

      if (event.action === 'openpage') {
        console.log('Performing action show-changes');

        event.waitUntil(clients.matchAll({
          includeUncontrolled: true,
          type: 'window'
        }).then(function (clientList) {
          for (var i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (client.url === event.notification.data && 'focus' in client) {
              return client.focus();
            }
          }
          if (clients.openWindow) {
            return clients.openWindow(event.notification.data);
          }
        }))
      } else {
        console.log('Performing default click action');

        // This looks to see if the current is already open and
        // focuses if it is
        event.waitUntil(clients.matchAll({
          includeUncontrolled: true,
          type: 'window'
        }).then(function (clientList) {
          for (var i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if ('focus' in client) {
              return client.focus();
            }
          }
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        }));
      }
    });

    self.addEventListener('notificationclose', function (event) {
      console.log('On notification close');
    });
  }

}
