import React from 'react';

const SkillItem = ({ name, percentage }) => {
  const barStyle = {
    width: `${percentage}%`
  };

  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{percentage}%</span>
      </div>
      <div className="skills__bar">
        <span className="skills__percentage" style={barStyle}></span>
      </div>
    </div>
  );
};

export default SkillItem;
