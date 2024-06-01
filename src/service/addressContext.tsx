import React, {ReactNode, createContext, useContext, useState} from 'react';
import {AddressProps} from '../screens/Home';

type StateProps = {
  address: AddressProps[];
  addAddress: (address: AddressProps) => void;
  removeAddress: (id: number) => void;
};

const AddressContext = createContext<StateProps | undefined>(undefined);

type AddressProviderProps = {
  children: ReactNode;
};

export const AddressProvider: React.FC<AddressProviderProps> = ({children}) => {
  const [address, setAddress] = useState<AddressProps[]>([]);

  const addAddress = (newAddress: AddressProps) => {
    setAddress(prevAddress => [...prevAddress, newAddress]);
  };

  const removeAddress = (id: number) => {
    setAddress(prevAddress =>
      prevAddress.filter(addressItem => addressItem.id !== id),
    );
  };

  return (
    <AddressContext.Provider value={{address, addAddress, removeAddress}}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressStore = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error('useAddressStore must be used within an AddressProvider');
  }
  return context;
};
