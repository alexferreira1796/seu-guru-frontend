import React, { ReactChild, ReactChildren } from 'react';

interface IMenu {
  open: boolean;
  controlMenu: () => void;
}

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const MenuGlobal = React.createContext<IMenu>({} as IMenu);

export const MenuProvider = ({ children }: AuxProps) => {
  const [open, setOpen] = React.useState(false);

  function controlMenu() {
    setOpen(!open);
  }

  return (
    <MenuGlobal.Provider value={{ open, controlMenu }}>
      {children}
    </MenuGlobal.Provider>
  );
};

export default MenuProvider;
