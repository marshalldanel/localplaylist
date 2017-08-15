import {setState, getState} from './appState';

// WHENEVER YOU WANT TO CHANGE THE STATE YOU MUST DEFINE AN ACTION THAT DOES SO
//KEEP YOUR VIEWS DUMB
//Actions up, data down

export function setView(view) { 
  setState({view});
}

export function addLocationField() { 
  const currentLocations = getState().locations;
  const newLocations = currentLocations.concat([{city:"",date:""}]);
  setState({locations: newLocations});
}

export function storeLocations(locations) { 
  
}
