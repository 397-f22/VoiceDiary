import { useNavigate, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const VoiceCalendar = () => {

  const [value, onChange] = useState(new Date());
 
  return (
    <div>
        <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default VoiceCalendar;
