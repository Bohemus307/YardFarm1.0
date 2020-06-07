/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Menu = () => {
  return (
    <div className="Menu">
      <div className="icon">
        <img className="logo-1" src="/images/greenhouse3.png" alt="company logo here" />
      </div>
      <div className="logo_text">
        Yard Farm
      </div>
      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>
      </div>
    </div>
  );
};

export default Menu;
