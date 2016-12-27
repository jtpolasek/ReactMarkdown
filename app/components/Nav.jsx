var React = require('react');
var Nav = () => {
  return(

    <div className="top-bar">
        <ul className="menu-centered">
          <li className="menu-text text-center">Free Code Camp Markdown Project</li>
          <li className="menu-text">Created by <a href="">Todd Polasek</a></li>
        </ul>
      <div className="top-bar-right">
        <ul className="menu-centered">

        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
