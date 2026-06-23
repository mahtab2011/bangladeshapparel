export type ApparelFactory = {
  id?: string;

  factoryId: string;
  factoryName: string;

  location: string;
  district?: string;
  country?: string;

  category: string;
  products?: string[];

  employees: string;
  capacity: string;

  leedStatus: string;
  certifications?: string[];

  exportMarkets: string;
  contactEmail: string;
  website?: string;

  status: "active" | "pending" | "inactive";

  createdAt?: any;
};