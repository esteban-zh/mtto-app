import React from 'react'
import { useEffect } from 'react';
import { startUi } from '../../services/firebase';

const Index = () => {

useEffect(() => {
    startUi('#firebaseui');
}, []);

  return (
    <div id="firebaseui">login</div>
  )
}

export default Index;