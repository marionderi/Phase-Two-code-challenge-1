import React from 'react';

const FilterSort = ({ showGreased, setShowGreased, sortBy, setSortBy }) => {
  return (
    <div>
      <label>
        Show Greased Hogs
        <input
          type="checkbox"
          checked={showGreased}
          onChange={(e) => setShowGreased(e.target.checked)}
        />
      </label>
      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSort;
