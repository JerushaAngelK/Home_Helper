import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PersistentDrawerLeft from '../components/Drawer';

export default function CustomMonthLayout() {
  return (
    <>
    <PersistentDrawerLeft/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
    </LocalizationProvider>
    </>
  );
}