export type BuyerRequestStatus =
  | "new"
  | "reviewed"
  | "forwarded"
  | "closed";

export type BuyerRequest = {
  id?: string;

  buyerName: string;
  buyerCompany: string;
  buyerEmail: string;
  buyerCountry: string;

  productCategory: string;
  quantity: string;
  targetPrice: string;
  message: string;

  preferredFactoryId?: string;
  preferredFactoryName?: string;

  status: BuyerRequestStatus;

  createdAt: any;
  forwardedAt?: any;
  forwardedToFactoryId?: string;
  forwardedToFactoryName?: string;
};