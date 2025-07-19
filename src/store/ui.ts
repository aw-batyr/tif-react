import { create } from "zustand";

interface UiType {
  sheet: boolean;
  popover: boolean;
  modal: boolean;

  setModal: (modalStat: boolean) => void;
  setSheet: (sheetState: boolean) => void;
  setPopover: (popoverState: boolean) => void;
}

export const useUiStore = create<UiType>()((set) => ({
  sheet: false,
  popover: false,
  modal: false,

  setModal: (modalState) => set({ modal: modalState }),
  setSheet: (state) => set({ sheet: state }),
  setPopover: (popoverState) => set({ popover: popoverState }),
}));
