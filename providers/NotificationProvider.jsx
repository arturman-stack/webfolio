'use client';

import React, {createContext, useCallback, useContext, useRef, useState} from 'react';
import Notification from "@/components/ui/notification/Notification";

const DEFAULT_DURATION = 4000;

const NotificationContext = createContext(null);

export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return ctx;
}

export function NotificationProvider({children}) {
  const [items, setItems] = useState([]);
  const timers = useRef({});

  const dismiss = useCallback((id) => {
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const notify = useCallback(
    (notification) => {
      const id =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

      const duration = notification.duration ?? DEFAULT_DURATION;

      setItems((prev) => [...prev, {...notification, id}]);

      if (duration > 0) {
        timers.current[id] = setTimeout(() => dismiss(id), duration);
      }

      return id;
    },
    [dismiss],
  );

  return (
    <NotificationContext.Provider value={{notify, dismiss}}>
      {children}
      <Notification items={items} onDismiss={dismiss}/>
    </NotificationContext.Provider>
  );
}
