export type Auth = {
  token: string;
  username: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
};

export interface SubscriberInterface {
  stateName: string;
  onUpdate: (data: any) => void;
}
