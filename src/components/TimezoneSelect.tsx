import React from 'react';
import { Globe } from 'lucide-react';

interface TimezoneSelectProps {
  value: string;
  onChange: (timezone: string) => void;
}

export const TimezoneSelect: React.FC<TimezoneSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-gray-500" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Intl.supportedValuesOf('timeZone').map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
    </div>
  );
};