export interface BrandInterface {
  id: string;
  name: string;
  code: number;
}

export interface ModelInterface {
  id: string;
  brand_id: string;
  name: string;
  code: number;
}
