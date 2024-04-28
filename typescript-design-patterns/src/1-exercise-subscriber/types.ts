export type Auth = {
  token: string;
  username: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
};

export interface iSubscriber {
  stateName: string;
  onUpdate: () => void;
}
