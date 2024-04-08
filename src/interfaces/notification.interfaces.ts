export interface INotification {
  message: string;
  categories: string[];
  channels: string[];
}

export interface IUserNotification {
  createdAt: Date;
  user: string;
  message: string;
  category: string;
  channel: string;
}
