import React from 'react';

export default function Controls({ types }) {
  return (
    <div>
      <select>
        <option value="">All</option>
        {types.map(({ type, count }) => {
          return (
            <option key={type} value={type}>
              {type}-{count}
            </option>
          );
        })}
      </select>
    </div>
  );
}
