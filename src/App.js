import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [redLight, setredLight] = useState(false);
  const [greenLight, setgreenLight] = useState(true);
  const [yelLight, setyelLight] = useState(false);

  const redRef = useRef(false);
  const greenRef = useRef(true);
  const yelRef = useRef(false);

  const transition = () => {
    if (greenRef.current) {
      redRef.current = false;
      yelRef.current = true;
      greenRef.current = false;
      setgreenLight(false);
      setyelLight(true);
      setredLight(false);
      waitShortInterval();
      return;
    }

    if (yelRef.current) {
      redRef.current = true;
      yelRef.current = false;
      greenRef.current = false;
      setgreenLight(false);
      setyelLight(false);
      setredLight(true);
      waitLongInterval();
      return;
    }

    if (redRef.current) {
      redRef.current = false;
      yelRef.current = false;
      greenRef.current = true;
      setgreenLight(true);
      setyelLight(false);
      setredLight(false);
      waitLongInterval();
      return;
    }
  };

  const waitLongInterval = () => {
    setTimeout(transition, 2000);
  };

  const waitShortInterval = () => {
    setTimeout(transition, 800);
  };

  useEffect(() => {
    waitLongInterval();
  }, []);

  return (
    <div className="mainBody">
      <h1>Traffic Control!</h1>
      <div className="container">
      <div
        style={{
          backgroundColor: redRef.current ? '#FF0000' : '#b30000',
          boxShadow: redRef.current && '0 0 6em #ff3333',
        }}
        className="light"
      ></div>
      <div
        style={{
          backgroundColor: yelRef.current ? '#FFFF00' : '#b2b300',
          boxShadow: yelRef.current && '0 0 6em #ffff33',
        }}
        className="light"
      ></div>
      <div
        style={{
          backgroundColor: greenRef.current ? '#00FF00' : '#00b300',
          boxShadow: greenRef.current && '0 0 6em #33ff33',
        }}
        className="light"
      ></div>
      </div>
    </div>
  );
}
