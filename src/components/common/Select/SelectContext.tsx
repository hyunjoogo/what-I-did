import { createContext, useContext } from "react";

export type SelectContextType = {
  selectedItem: string | null;
  isOpen: boolean;
  triggerSuffixText: string;
  toggleOpen: () => void;
  changeSelectedItem: (item: string) => void;
  changeTriggerSuffixText: (value: string) => void;
};

const SelectContext = createContext<SelectContextType>({
  selectedItem: null,
  isOpen: false,
  triggerSuffixText: "",
  toggleOpen: () => {},
  changeSelectedItem: () => {},
  changeTriggerSuffixText: () => {},
});

export const useSelectContext = () => useContext(SelectContext);

export default SelectContext;
