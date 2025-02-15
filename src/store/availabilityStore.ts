import { create } from 'zustand';
import { TimeSlot, AvailabilityState } from '../types';

export const useAvailabilityStore = create<AvailabilityState>((set) => ({
  slots: [],
  addSlot: (slot: TimeSlot) =>
    set((state) => ({ slots: [...state.slots, slot] })),
  removeSlot: (id: string) =>
    set((state) => ({
      slots: state.slots.filter((slot) => slot.id !== id),
    })),
  updateSlot: (id: string, updatedSlot: Partial<TimeSlot>) =>
    set((state) => ({
      slots: state.slots.map((slot) =>
        slot.id === id ? { ...slot, ...updatedSlot } : slot
      ),
    })),
  copyDaySlots: (fromDay: string, toDay: string) =>
    set((state) => {
      const slotsToAdd = state.slots
        .filter((slot) => slot.day === fromDay)
        .map((slot) => ({
          ...slot,
          id: crypto.randomUUID(),
          day: toDay,
        }));
      return { slots: [...state.slots, ...slotsToAdd] };
    }),
}));