import React from 'react';

export default function Controls({ types, handler }) {
  return (
    <select onChange={(e) => handler(e.target.value)}>
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
