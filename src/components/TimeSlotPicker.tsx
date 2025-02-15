import React, { useState } from 'react';
import { format, parse } from 'date-fns';
import { Clock, Plus, Trash2 } from 'lucide-react';
import { useAvailabilityStore } from '../store/availabilityStore';

interface TimeSlotPickerProps {
  day: string;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ day }) => {
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const { addSlot, slots, removeSlot } = useAvailabilityStore();

  const handleAddSlot = () => {
    const start = parse(startTime, 'HH:mm', new Date());
    const end = parse(endTime, 'HH:mm', new Date());

    if (end <= start) {
      alert('End time must be after start time');
      return;
    }

    addSlot({
      id: crypto.randomUUID(),
      startTime,
      endTime,
      day,
    });
  };

  const daySlots = slots.filter((slot) => slot.day === day);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="px-2 py-1 border rounded"
          />
        </div>
        <span>to</span>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="px-2 py-1 border rounded"
          />
        </div>
        <button
          onClick={handleAddSlot}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add Slot
        </button>
      </div>

      <div className="space-y-2">
        {daySlots.map((slot) => (
          <div
            key={slot.id}
            className="flex items-center justify-between p-3 bg-white rounded-md shadow"
          >
            <span className="text-gray-700">
              {format(parse(slot.startTime, 'HH:mm', new Date()), 'h:mm a')} -{' '}
              {format(parse(slot.endTime, 'HH:mm', new Date()), 'h:mm a')}
            </span>
            <button
              onClick={() => removeSlot(slot.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded-full"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};