import {Routes, Route} 
from 'react-router-dom';

import { Landing } 
from './landingpage';

import { Profile } 
from './myprofile';

  const routes = (
      <Routes>
         <Route path="" element={<Landing/>}></Route>
         <Route path="/myprofile" element={<Profile/>}></Route>
      </Routes>
  )

  export default routes