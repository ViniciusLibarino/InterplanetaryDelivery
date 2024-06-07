// cartStore.ts
import {create} from 'zustand';

export type AddressProps = {
  id: number;
  title: string;
  address: string;
  planet: 'earth' | 'mars';
};

type StateProps = {
  address: AddressProps[];
  addNewAddress: (address: AddressProps) => void;
  removeAddress: (id: number) => void;
};

export const useAddressStore = create<StateProps>(set => ({
  address: [],
  addNewAddress: (address: AddressProps) => {
    set(state => ({
      address: [...state.address, address],
    }));
  },
  removeAddress: (id: number) => {
    set(state => ({
      address: state.address.filter(address => address.id !== id),
    }));
  },
}));
