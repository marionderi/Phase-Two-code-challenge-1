import React, { useState } from 'react';
import hogsData from './porkers_data';
import HogList from './HogList';
import AddHogForm from './AddHogForm';
import FilterSort from './FilterSort';

const App = () => {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const handleHideHog = (name) => {
    setHiddenHogs([...hiddenHogs, name]);
  };

  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;
  const sortedHogs = filteredHogs.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  return (
    <div>
      <h1>Hog Wild!</h1>
      <FilterSort 
        showGreased={showGreased}
        setShowGreased={setShowGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <AddHogForm onAddHog={handleAddHog} />
      <HogList hogs={sortedHogs} hiddenHogs={hiddenHogs} onHideHog={handleHideHog} />
    </div>
  );
};

export default App;
