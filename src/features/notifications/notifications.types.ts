import { TypeNotificationProps } from "@src/atoms/newsItem/newsItem.types";

export type NotificationProps = {
  targetId: string;
  title: string;
  message: string;
  typeNotification: TypeNotificationProps;
  color: "yellow" | "green" | "default";
  publishDate: Date | null | string;
  readed: boolean;
};

export type Notifications = {
  data: NotificationProps[];
  pageNumber: number;
  nextPage: number;
  lastPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
};

export type NotificationsResponse = {
  message: string;
  response: Notifications;
};

export type NotificationArgProps = {
  start?: number;
  size?: number;
  readed: boolean;
};

export type ReadedNotificationArgProps = {
  targetId: string;
  readed: boolean;
};
