import React from 'react';

export default function Controls({ types, handler, filter, setFilter }) {
  return (
    <select
      defaultValue={filter}
      onChange={(e) => {
        setFilter(e.target.value);
        handler(e.target.value);
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
  );
}
