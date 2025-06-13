export type TypeNotificationProps =
  | "CONGRATULATIONS"
  | "JOB_OPPORTUNITY"
  | "REWARDS";

export type TypeProps = TypeNotificationProps;

export type NewsItemProp = {
  title: string;
  body: string;
  notificationType: TypeProps;
  publicationDate: string;
  color: string;
  readed: boolean;
  targetId: string;
};

export type WrapperProps = {
  color: string;
  type: TypeProps;
  readed: boolean;
};
