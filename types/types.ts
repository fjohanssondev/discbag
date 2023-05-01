export interface IDisc {
  id: string;
  name: string;
  description?: string | null;
  image?: string | null;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
  manufacturer: string;
  stability: string | null;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  bagId?: string | null; 
}

export interface IBag {
  id: string;
  name: string;
  description?: string | null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  discs?: IDisc[];
}