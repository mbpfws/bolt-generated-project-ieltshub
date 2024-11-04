import React from 'react';
    import { Link } from 'react-router-dom';

    function SpeakingParts() {
      return (
        <div className="speaking-parts">
          <div className="card">
            <h3>Part 1</h3>
            <p>Introduction and Interview</p>
            <Link to="/speaking/part1" className="button">Start Practice</Link>
          </div>
          <div className="card">
            <h3>Part 2</h3>
            <p>Individual Long Turn</p>
            <Link to="/speaking/part2" className="button">Start Practice</Link>
          </div>
          <div className="card">
            <h3>Part 3</h3>
            <p>Two-way Discussion</p>
            <Link to="/speaking/part3" className="button">Start Practice</Link>
          </div>
        </div>
      );
    }

    export default SpeakingParts;
