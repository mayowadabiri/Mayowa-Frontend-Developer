export interface ITextsProps {
  name: string;
  color: string;
  bgColor: string;
  fill: string;
}

export type Capsules = {
  id: string;
  land_landings: number;
  last_update: string;
  launches: string[];
  reuse_count: number;
  serial: string;
  status: string;
  type: string;
  water_landings: number;
};

export type ICpasulesQuery = {
  docs: Capsules[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
};

export type CapsuleUI = {
  id: string;
  launches: number;
  reuse: number;
  serial: string;
  dragonType: string;
  water_landings: number;
  status: string;
  last_update: string;
};
