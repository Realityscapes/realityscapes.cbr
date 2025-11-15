import React, { useState } from 'react';

interface CalendarProps {
  onDateSelect: (date: Date) => void;
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  hasAvailableSlots: (day: number) => boolean;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, currentDate, setCurrentDate, hasAvailableSlots }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Sample unavailable dates - in real app, these would come from backend
  const unavailableDates: number[] = []; // Days to cross out - will be populated later
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const handleDateClick = (day: number) => {
    if (unavailableDates.includes(day)) return;
    
    // Check if the date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    clickedDate.setHours(0, 0, 0, 0);
    
    if (clickedDate < today) return;
    
    // Check if it's a weekend (Saturday = 6, Sunday = 0)
    const dayOfWeek = clickedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return; // Skip weekends
    
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    onDateSelect(date);
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    
    // Don't allow navigation to past months
    const today = new Date();
    if (newDate.getFullYear() < today.getFullYear() || 
        (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() < today.getMonth())) {
      return;
    }
    
    setCurrentDate(newDate);
    setSelectedDate(null); // Clear selection when changing months
  };

  const renderCalendarDays = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isUnavailable = unavailableDates.includes(day) || (hasAvailableSlots && !hasAvailableSlots(day));
      const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      dayDate.setHours(0, 0, 0, 0);
      const isPastDate = dayDate < today;
      const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6; // Sunday = 0, Saturday = 6
      const isSelected = selectedDate?.getDate() === day && 
                        selectedDate?.getMonth() === currentDate.getMonth() &&
                        selectedDate?.getFullYear() === currentDate.getFullYear();
      const isFullyBooked = hasAvailableSlots && !hasAvailableSlots(day) && !isPastDate && !isWeekend;
      
      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`
            h-12 flex items-center justify-center relative text-sm
            ${isPastDate || isUnavailable || isFullyBooked || isWeekend
              ? 'text-gray-400 cursor-not-allowed' 
              : 'hover:bg-green-100 text-gray-800 cursor-pointer'
            }
            ${isSelected ? 'bg-green-500 text-white rounded-lg' : ''}
            ${isFullyBooked ? 'bg-red-100 text-red-600' : ''}
            ${isWeekend ? 'bg-gray-100 text-gray-400' : ''}
          `}
        >
          {day}
          {(isPastDate || isUnavailable || isFullyBooked || isWeekend) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-6 h-0.5 transform rotate-45 ${isFullyBooked ? 'bg-red-400' : 'bg-gray-400'}`}></div>
              <div className={`w-6 h-0.5 transform -rotate-45 absolute ${isFullyBooked ? 'bg-red-400' : 'bg-gray-400'}`}></div>
            </div>
          )}
          {isFullyBooked && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="text-xs text-red-600 font-bold">FULL</div>
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          disabled={currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h3 className="text-lg md:text-2xl font-bold text-green-500">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        
        <button
          onClick={() => navigateMonth('next')}
          className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map(day => (
          <div key={day} className="text-center font-semibold text-gray-600 py-2 text-xs">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
      
    </div>
  );
};

export default Calendar;