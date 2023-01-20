import React from 'react';

export default function Controls({
  types,
  handleFilter,
  handleSearch,
  filter,
  setFilter,
  search,
  setSearch,
}) {
  return (
    <div>
      <select
        defaultValue={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          handleFilter(e.target.value);
        }}
      >
        <option value="">All</option>
        {types.map(({ type, count }) => {
          return (
            <option key={type} value={type}>
              {type}-{count}
            </option>
          );
        })}
      </select>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={() => handleSearch(filter, search)}>Search</button>
    </div>
  );
}
