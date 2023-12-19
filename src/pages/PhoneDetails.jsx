import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function PhoneDetails() {
    const API_URL = "http://localhost:3000";
    const [phone, setPhone] = useState(null)
    const { phoneId } = useParams()

     
  return (
    <div>PhoneDetails</div>
  )
}

export default PhoneDetails