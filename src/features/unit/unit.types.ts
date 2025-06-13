export interface UnitsResponse {
  pageCount: number;
  message: string;
  response: Response;
}

export interface Unit {
  unitId: string;
  name: string;
  email: string;
  city: string;
  state: string;
  zipCode: string;
  address: string;
  photo: string;
  phone: string;
  createdAt: string;
  coordinatorName: string;
  employees: number;
}

export interface Response {
  data: Unit[];
  pageNumber: number;
  nextPage: number;
  lastPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
}
