export type TClient = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string;
  updatedAt: string;
};

export type TClientsResponse = {
  clients: TClient[];
  totalPages: number;
  currentPage: number;
};
