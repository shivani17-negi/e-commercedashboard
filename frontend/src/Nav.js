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
          <li>{auth?<Link onClick={logout} to ="/signUp">Logout</Link>:<Link to ="/signup">SignUp</Link>}</li>
<<<<<<< HEAD
          <li>

          <Link to ="/Login">Login</Link>

          </li>
=======
>>>>>>> 7c228e5afe1a2a490a31c56842cac6c0fc577cff
         
        </ul>
      </div>
    );
}
export default Nav; 