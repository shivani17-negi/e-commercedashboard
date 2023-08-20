import React from 'react';
import {Link ,useNavigate} from 'react-router-dom';
const Nav=()=>{

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout=()=>{


    localStorage.clear();
    navigate('/SignUp')
  }

    return (
      <div>
        <ul className='nav-ul'>
          <li>
            <Link to="/">products</Link>
          </li>
          <li>
            <Link to="/add">add products</Link>
          </li>
          <li>
            <Link to="/update">update products</Link>
          </li>
          
          <li>
            <Link to="/profile">profile</Link>

          </li>
          {
         auth?<li><Link onClick={logout}to="/SignUp">logout</Link> </li>
         :<>
         <li><Link to ="/signup">signup</Link></li>
         <li><Link to ="/login">login</Link></li>
         
         
         
         
         
         </>



          }
        
         
        </ul>
      </div>
    );
}
export default Nav; 