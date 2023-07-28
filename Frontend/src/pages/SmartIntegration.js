// // App.js

// import React from 'react';
// import PersistentDrawerLeft from '../components/Drawer';
// import './Smart.css';
// // import './App.css';

// // Sample Device Component
// const DeviceComponent = ({ name, status }) => {
//   return (
//     <div className="device">
//       <h3>{name}</h3>
//       <p>Status: {status ? 'On' : 'Off'}</p>
//     </div>
//   );
// };

// // Sample Control Component
// const ControlComponent = ({ deviceName, status, onToggle }) => {
//   return (
//     <div className="control">
//       <h4>{deviceName}</h4>
//       <button onClick={onToggle}>{status ? 'Turn Off' : 'Turn On'}</button>
//     </div>
//   );
// };

// function Smart() {
//   // Sample device and control data
//   const devices = [
//     { name: 'Light Bulb', status: true },
//     { name: 'Thermostat', status: false },
//     { name: 'Security Camera', status: true },
//   ];

//   const toggleDevice = (deviceName) => {
//     // Logic to toggle device status
//     console.log(`Toggling ${deviceName}...`);
//   };

//   return (
//       <div className="container">
//         <PersistentDrawerLeft/>
//       <header>
//         <h1>Smart Home Integration</h1>
//       </header>
//       <main>
//         <section className="devices-section">
//           <h2>Connected Devices</h2>
//           {devices.map((device, index) => (
//             <DeviceComponent key={index} name={device.name} status={device.status} />
//           ))}
//         </section>
//         <section className="control-section">
//           <h2>Control Panel</h2>
//           {devices.map((device, index) => (
//             <ControlComponent
//               key={index}
//               deviceName={device.name}
//               status={device.status}
//               onToggle={() => toggleDevice(device.name)}
//             />
//           ))}
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2023 Smart Home Integration</p>
//       </footer>
//     </div>
//   );
// }

// export default Smart;
// App.js

import React, { useState } from 'react';
import PersistentDrawerLeft from '../components/Drawer';
import './Smart.css';

// Sample Device Component
const DeviceComponent = ({ name, status }) => {
  return (
    <div className="device">
      <h3>{name}</h3>
      <p>Status: {status ? 'On' : 'Off'}</p>
    </div>
  );
};

// Sample Control Component
const ControlComponent = ({ deviceName, status, onToggle }) => {
  return (
    <div className="control">
      <h4>{deviceName}</h4>
      <button onClick={onToggle}>{status ? 'Turn Off' : 'Turn On'}</button>
    </div>
  );
};

function Smart() {
  // Sample device and control data
  const initialDevices = [
    { name: 'Light Bulb', status: true },
    { name: 'Thermostat', status: false },
    { name: 'Security Camera', status: true },
  ];

  const [devices, setDevices] = useState(initialDevices);

  const toggleDevice = (deviceName) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.name === deviceName ? { ...device, status: !device.status } : device
      )
    );
  };

  return (
    <div className="container">
      <PersistentDrawerLeft />
      <header>
        <h1>Smart Home Integration</h1>
      </header>
      <main>
        <section className="devices-section">
          <h2>Connected Devices</h2>
          {devices.map((device, index) => (
            <DeviceComponent key={index} name={device.name} status={device.status} />
          ))}
        </section>
        <section className="control-section">
          <h2>Control Panel</h2>
          {devices.map((device, index) => (
            <ControlComponent
              key={index}
              deviceName={device.name}
              status={device.status}
              onToggle={() => toggleDevice(device.name)}
            />
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Smart Home Integration</p>
      </footer>
    </div>
  );
}

export default Smart;
