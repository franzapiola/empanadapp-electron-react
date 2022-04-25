import create from "zustand";

import { defaultFlavors } from "@constants";

const useStore = create((set) => ({
  username: "Usuario",
  setUsername: (v) => set((state) => ({ ...state, username: v })),
  counter: {
    participants: [],
    flavors: [...defaultFlavors],
    totalCount: 0,
    //Add a new participant to the party
    addParticipant: (name) =>
      set((state) => {
        const newParticipant = {
          name,
          picks: state.counter.flavors,
          totalCount: 0,
        };
        return {
          ...state,
          counter: {
            ...state.counter,
            participants: [...state.counter.participants, newParticipant],
          },
        };
      }),
    //Increase flavor pick count by participant name and flavor name
    increaseFlavorCount: ({ participantName, flavorName }) =>
      set((state) => {
        const newArray = state.counter.participants;

        let participantIndex;
        const participant = newArray.find(({ name }, index) => {
          if (name === participantName) {
            participantIndex = index;
            return true;
          }
          return false;
        });

        let flavorIndex;
        const participantPicksFind = participant.picks.find(
          ({ name }, index) => {
            flavorIndex = index;
            return name === flavorName;
          }
        );

        participantPicksFind.amount++;
        participant.picks[flavorIndex] = participantPicksFind;

        participant.totalCount++;

        newArray[participantIndex] = participant;

        return {
          ...state,
          counter: {
            ...state.counter,
            totalCount: state.counter.totalCount + 1,
            participants: newArray,
          },
        };
      }),
    //Decrease flavor count by participant name and flavor name
    decreaseFlavorCount: ({ participantName, flavorName }) =>
      set((state) => {
        let totalCount = state.counter.totalCount;
        let participantIndex;
        const newArray = state.counter.participants;
        const participant = state.counter.participants.find(
          ({ name }, index) => {
            if (name === participantName) {
              participantIndex = index;
              return true;
            }
            return false;
          }
        );

        let flavorIndex;
        const participantPicksFind = participant.picks.find(
          ({ name }, index) => {
            flavorIndex = index;
            return name === flavorName;
          }
        );

        if (participantPicksFind.amount > 0) {
          participantPicksFind.amount--;
          participant.picks[flavorIndex] = participantPicksFind;
          participant.totalCount--;
          totalCount--;
        }

        newArray[participantIndex] = participant;

        return {
          ...state,
          counter: {
            ...state.counter,
            totalCount,
            participants: newArray,
          },
        };
      }),
  },
}));

export default useStore;
