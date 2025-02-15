import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { TimeSlotPicker } from './components/TimeSlotPicker';
import { TimezoneSelect } from './components/TimezoneSelect';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function App() {
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [selectedDay, setSelectedDay] = useState(DAYS[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Slot Booking</h1>
            </div>
            <TimezoneSelect value={timezone} onChange={setTimezone} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <User className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-medium text-gray-900">Your Availability</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              {DAYS.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    selectedDay === day
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <TimeSlotPicker day={selectedDay} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;