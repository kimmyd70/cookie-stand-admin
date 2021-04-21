
import { useState } from 'react';
import CookieAdmin from '../components/cookie-stand-admin';

export default function Home() {
  const [formInfo, setInfo] = useState("");

  
  return (
    <CookieAdmin />
  );
}

