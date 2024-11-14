import { create } from 'zustand';

interface AlertStore {
  isOpen: boolean; // Alert 창 열림 여부
  message: string; // Alert에 표시할 메시지
  openModal: (message: string) => void; // Alert를 띄우는 함수
  closeModal: () => void; // Alert를 닫는 함수
}

interface FindPasswordModal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useAlertStore = create<AlertStore>((set) => ({
  isOpen: false,
  message: '',
  openModal: (message: string) => set({ isOpen: true, message }),
  closeModal: () => set({ isOpen: false, message: '' }),
}));

export const useFindPasswordModal = create<FindPasswordModal>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen: !isOpen }),
}));
