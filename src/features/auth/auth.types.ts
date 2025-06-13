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

export type Auth = {
  access_token: null | string;
  expires_in: number;
  id_token: null | string;
  refresh_token: null | string;
  token_type: null | string;
  user: UserProps | null;
};

export type LoginResponse = {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: null | string;
  token_type: null | string;
};

export type LoginBodyProps = {
  client_id: string;
  grant_type: string;
  redirect_uri: string;
  code: string;
};

type Identity = {
  dateCreated: string;
  userId: string;
  providerName: string;
  providerType: string;
  issuer: string | null;
  primary: string;
};

export type DecodedIdToken = {
  at_hash: string;
  sub: string;
  "cognito:groups": string[];
  email_verified: boolean;
  iss: string;
  "cognito:username": string;
  nonce: string;
  picture: string;
  origin_jti: string;
  aud: string;
  identities: Identity[];
  token_use: string;
  auth_time: number;
  exp: number;
  iat: number;
  key: string;
  invalid_user: string;
  jti: string;
  email: string;
  given_name: string;
};
export type UserResponse = UserProps;

export type ResponseProps = {
  data: string;
};

export type DeleteAccountResponse = {
  message: string;
  response: ResponseProps;
};
