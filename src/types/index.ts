export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  day: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  timezone: string;
}

export interface AvailabilityState {
  slots: TimeSlot[];
  addSlot: (slot: TimeSlot) => void;
  removeSlot: (id: string) => void;
  updateSlot: (id: string, slot: Partial<TimeSlot>) => void;
  copyDaySlots: (fromDay: string, toDay: string) => void;
}