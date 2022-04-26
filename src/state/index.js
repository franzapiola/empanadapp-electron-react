import create from "zustand";

import { defaultFlavors } from "@constants";

const useStore = create((set) => ({
  username: "Usuario",
  setUsername: (v) => set((state) => ({ ...state, username: v })),
  counter: {
    flavors: [...defaultFlavors],
    totalCount: 0,
    participants: [],
    selectedParticipantIndex: 0,
    selectParticipant: (index) =>
      set((state) => ({
        ...state,
        counter: {
          ...state.counter,
          selectedParticipantIndex: index,
        },
      })),
    //Add a new participant to the party
    addParticipant: (name) =>
      set((state) => {
        const newParticipant = {
          name,
          totalCount: 0,
        };
        const isDuplicate = state.counter.participants.find(
          (p) => p.name === newParticipant.name
        );
        if (isDuplicate) {
          return state;
        }
        const newArray = [...state.counter.participants, newParticipant];
        return {
          ...state,
          counter: {
            ...state.counter,
            participants: newArray,
            selectedParticipantIndex: newArray.length - 1,
          },
        };
      }),
    //Add new flavor, by flavor name
    addFlavor: (newFlavorName) =>
      set((state) => {
        const newFlavor = {
          name: newFlavorName,
          amount: 0,
          //TODO: Add option to specify if new flavor is veggie
          veggie: false,
          countByParticipants: {},
        };
        const isDuplicate = state.counter.flavors.find(
          ({ name }) => name === newFlavor.name
        );
        if (isDuplicate) {
          return state;
        }

        return {
          ...state,
          counter: {
            ...state.counter,
            flavors: [...state.counter.flavors, newFlavor],
            // participants: state.counter.participants.map((p) => ({
            //   ...p,
            //   picks: [...p.picks, newFlavor],
            // })),
          },
        };
      }),
    //Increase flavor pick count by index, within the currently selected participant's picks
    increaseFlavorCount: (index) =>
      set((state) => {
        const {
          counter: { participants, selectedParticipantIndex },
        } = state;
        const currentParticipantName =
          participants[selectedParticipantIndex].name;
        const newArray = [...state.counter.flavors];
        const selectedFlavor = newArray[index];

        let amount = selectedFlavor.countByParticipants[currentParticipantName];

        if (typeof amount === "number") {
          amount++;
        } else {
          amount = 1;
        }

        selectedFlavor.countByParticipants[currentParticipantName] = amount;
        newArray[index] = selectedFlavor;

        return {
          ...state,
          counter: {
            ...state.counter,
            totalCount: state.counter.totalCount + 1,
          },
        };
      }),
    //Decrease flavor pick count by index, within the currently selected participant's picks
    decreaseFlavorCount: (index) =>
      set((state) => {
        const {
          counter: { participants, selectedParticipantIndex },
        } = state;
        let totalCount = state.counter.totalCount;
        const currentParticipantName =
          participants[selectedParticipantIndex].name;
        const newArray = [...state.counter.flavors];
        const selectedFlavor = newArray[index];

        let amount = selectedFlavor.countByParticipants[currentParticipantName];

        if (typeof amount === "number" && amount > 0) {
          amount--;
          totalCount--;
        } else {
          amount = 0;
        }

        selectedFlavor.countByParticipants[currentParticipantName] = amount;
        newArray[index] = selectedFlavor;

        return {
          ...state,
          counter: {
            ...state.counter,
            totalCount,
          },
        };
      }),
  },
}));

export const useModalStore = create((set) => ({
  show: {
    addFlavorModal: false,
    addParticipantModal: false,
  },
  toggleModal: (key, value) =>
    set((state) => ({
      ...state,
      show: {
        ...state.show,
        [`${key}Modal`]: value || !state.show[`${key}Modal`],
      },
    })),
}));

export default useStore;
