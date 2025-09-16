import { createContext, useContext, useState } from 'react';

const LockerContext = createContext();

export function LockerProvider({ children }) {
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return <LockerContext.Provider value={{ selectedLocker, setSelectedLocker, selectedLocation, setSelectedLocation }}>{children}</LockerContext.Provider>;
}

export function useLocker() {
  return useContext(LockerContext);
}
