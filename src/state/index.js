import create from "zustand";

const useStore = create((set) => ({
  username: "Usuario",
  setUsername: (v) => set((state) => ({ ...state, username: v })),
}));

export default useStore;
