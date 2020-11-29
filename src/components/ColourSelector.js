import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={config.classname} onClick={() => selectNextBackground( config.key)}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
