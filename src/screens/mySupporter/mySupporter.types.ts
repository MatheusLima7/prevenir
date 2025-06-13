export type EmotionalStatus = "REQUESTED" | "DENIED" | "ACTING";

export interface CreateSupporterPayload {
  mentorName: string;
  mentorCellPhone: string;
  supportedId?: string;
}

export interface DeleteSupporterPayload {
  id: string;
  supportedId?: string;
}

export interface Supporter {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorPhoneNumber: string;
  dateRequested: string;
  status: "REQUESTED" | "ACTING";
}

export interface CreateSupporterResponse {
  message: string;
  data: Supporter;
}

export interface EmotionalSupporter {
  id: string;
  mentorId: string;
  mentorName: string;
  dateRequested: string;
  status: EmotionalStatus;
}

export interface EmotionalResponse {
  data: EmotionalSupporter[];
  pageNumber: number;
  nextPage: number;
  lastPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
}
