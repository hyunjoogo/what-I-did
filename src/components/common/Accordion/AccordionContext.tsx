import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import useDisplay from '../../../hooks/common/useDisplay';

const AccordionContext = createContext({
  isShow: false,
  show: () => {},
  hide: () => {},
});

export const AccordionProvider = ({ children }: PropsWithChildren) => {
  const { isShow, show, hide } = useDisplay();

  const value = useMemo(() => ({ isShow, show, hide }), [isShow, show, hide]);

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

export const useAccordion = () => useContext(AccordionContext);
