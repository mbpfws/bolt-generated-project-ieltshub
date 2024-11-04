import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaHeadphones, FaMicrophone, FaBookOpen, FaPen, FaGlobe, FaBook, FaUserShield, FaUser } from 'react-icons/fa';

    function Sidebar() {
      return (
        <div className="sidebar">
          <ul>
            <li><Link to="/listening"><FaHeadphones /> Listening</Link></li>
            <li><Link to="/speaking"><FaMicrophone /> Speaking</Link></li>
            <li><Link to="/reading"><FaBookOpen /> Reading</Link></li>
            <li><Link to="/writing"><FaPen /> Writing</Link></li>
            <li><Link to="/grammar"><FaGlobe /> Grammar</Link></li>
            <li><Link to="/vocabulary"><FaBook /> Vocabulary</Link></li>
            <li><Link to="/admin"><FaUserShield /> Admin</Link></li>
            <li><Link to="/profile"><FaUser /> Profile</Link></li>
          </ul>
        </div>
      );
    }

    export default Sidebar;
