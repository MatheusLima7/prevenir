export interface Supporter {
  id: string;
  name: string;
  phone: string;
  status: "ACCEPTED" | "PENDING";
}

export interface SupportersState {
  hasRegistered: boolean;
}
