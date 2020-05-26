import React from 'react';
import './SideBar.css'
import { Nav, NavItem, NavLink, Icon } from 'reactstrap';

const Example = (props) => {
  return (
      <Nav vertical className="navbar-dark default-color sidenav">
        <NavItem>  
          <NavLink href="/hi08" className="navlinkwhite">DashBoard 
            <i class="fas fa-book-open" ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/hi08/location" className="navlinkwhite">Location
            <i class="fas fa-map-marker-alt"></i> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/hi08/drones" className="navlinkwhite">Drones
            <i class="fas fa-fighter-jet"></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/hi08/projects" className="navlinkwhite">Projects 
            <i class="fas fa-tasks"></i> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/hi08/members" className="navlinkwhite">Members 
            <i class="fas fa-users"></i>
          </NavLink>
        </NavItem>
      </Nav>
  );
}

export default Example;