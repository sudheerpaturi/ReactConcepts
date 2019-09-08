import React from 'react';
import logo from './logo.svg';
import UseStateHookDemo from './hooksDemonstration/use_state_hook_demo';
import ComponentDidMountHook from './hooksDemonstration/component_did_mount_hook';
import CustomHookComponentDidMountDemo from './hooksDemonstration/custom_hook_component_did_mount_demo';
import './App.css';

function App() {
  return (
    <CustomHookComponentDidMountDemo/>
  );
}

export default App;
