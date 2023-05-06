import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';


//Education and Information Management





//Education and Information Management





//User Profile and Inquiry Management





// Safty and Security Management 
import Alerts from './UserView/Safety and Security Management/Alerts';
import EmergencyContacts from './UserView/Safety and Security Management/EmergencyContacts';
import HealthAdvisories from './UserView/Safety and Security Management/HealthAdvisories';
import SaftyTips from './UserView/Safety and Security Management/SaftyTips';






function App() {
  return (

    <div className="App">
      <Header />
      <Router>
        <Routes>



        {/* Education and Information Management */}





        {/* Education and Information Management */}





        {/* User Profile and Inquiry Management */}





        {/* Safty and Security Management  */}
          <Route path="/SafeGuide/Alerts" element={<Alerts />} />
          <Route path="/SafeGuide/EmergencyContacts" element={<EmergencyContacts />} />
          <Route path="/SafeGuide/HealthAdvisories" element={<HealthAdvisories />} />
          <Route path="/SafeGuide/SaftyTips" element={<SaftyTips />} />

        </Routes>
      </Router>

    </div>

  );
}

export default App;

