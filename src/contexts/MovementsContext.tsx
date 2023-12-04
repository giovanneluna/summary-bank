
import React, { createContext, useContext, useState } from 'react';

export interface Movement {
  name: string;
  description: string;
  balance: number;
  metodoPagamento: boolean;
  tipoEntrada: boolean;
}

interface MovementsContextProps {
  movements: Movement[];
  totalBalance: number;
  addMovement: (movement: Movement) => void;
}

const MovementsContext = createContext<MovementsContextProps>({
  movements: [],
  totalBalance: 0,
  addMovement: () => {},
});

export const useMovements = () => useContext(MovementsContext);

export function MovementsProvider ({ children }:{children:React.ReactNode}) {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  const addMovement = (movement: Movement) => {
    setMovements([...movements, movement]);

    if (movement.tipoEntrada) {
      setTotalBalance(prevBalance => prevBalance + movement.balance);
    } else {
      setTotalBalance(prevBalance => prevBalance - movement.balance);
    }
  };

  const contextValue: MovementsContextProps = {
    movements,
    totalBalance,
    addMovement,
  };

  return (
    <MovementsContext.Provider value={contextValue}>
      {children}
    </MovementsContext.Provider>
  );
};
