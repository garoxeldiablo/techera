import { useState, useEffect } from 'react';

function DateTimeInput() {
  const [value, setValue] = useState('');

  useEffect(() => {
    // Get the current date and time in the correct format
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Combine to format YYYY-MM-DDTHH:MM
    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    // Set the initial value and min attribute
    setValue(currentDateTime);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="datetime-local"
      value={value}
      onChange={handleChange}
      min={value}
      max="2024-12-30T00:00"
      className="border-gray-400 rounded-md my-2"
    />
  );
}

export default DateTimeInput;
