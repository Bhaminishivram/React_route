import React from "react";
import { Route } from "react-router";
import Posts from './posts';
import SideBar from './sidebar'; 
import Users from './users'; 

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1> 
      <SideBar/> 
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} /> 
        
        {/* <ul> 
        <li>
          <link to ="/admin/posts">Posts</link>
        </li> 

        <li> 
        <link to ="/admin/users">Users</link>
        </li>
          </ul> */}

        
    </div>
  );
};

export default Dashboard;
