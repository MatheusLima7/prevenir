// FIXME: Replace any based on response call
/* eslint-disable @typescript-eslint/no-explicit-any */
export type PosConfirm = Record<string, any>;

export type PosConfirmBodyResponse = Record<string, any | any[]>;

export type PosConfirmBodyProps = {
  id: string;
  name: string;
  givenName: string;
  email: string;
  tokenId: string;
  deviceToken: string;
  phoneNumbers: string[];
};

export type PosConfirmProps = {
  user: Record<string, any>;
  users: Record<string, any>[];
};

export type User = {
  data: UserProps[];
};

export type UserProps = {
  at_hash: string;
  aud: string;
  auth_time: number;
  cognito: string[];
  email: string;
  email_verified: boolean;
  exp: number;
  iat: number;
  invalid_user: boolean;
  iss: string;
  jti: string;
  key: string;
  name: string;
  nonce: string;
  origin_jti: string;
  picture: string;
  preferred_username: string;
  sub: string;
  token_use: string;
  userId: string;
  dateRegister: string;
  lastLogin: string;
  profile: string;
  unit: string;
  unitId: string;
};
