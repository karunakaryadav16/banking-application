//home component
import { useDispatch } from 'react-redux';
import { removeUserDetails } from '../Store.jsx';


import React from 'react'
import "./Home.css"
import { IoMdHome } from "react-icons/io";
import { BiSolidDownArrowSquare } from "react-icons/bi";
import {NavLink} from "react-router-dom"
import { FaProjectDiagram } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
 import { FaFileInvoiceDollar } from "react-icons/fa";
 import { IoPersonCircle } from "react-icons/io5";
 import { IoPersonSharp } from "react-icons/io5";
 import { MdOutlinePersonAddDisabled } from "react-icons/md"
 import { IoSettingsSharp } from "react-icons/io5";

import { useSelector } from 'react-redux';



function Home() {


   const dispatch = useDispatch();

let tabledata = useSelector((t)=>t. user)
let length = tabledata.length


const handleDelete = (Id) => {
   dispatch(removeUserDetails(Id)); // Dispatching the removeUserDetails action with the Id
 };



  return (
    <div className='Home_container'>
      <div className='navbar_container'>
       <h3> smart dwellings</h3 >
       <span>.</span>

   </div>

<div className='below_navbar_content_container'>       
        <div className='sidebar'>
            <NavLink to="/"> <h2>  <MdDashboard/>&nbsp; Dashboard</h2></NavLink>
              
              <details>
             <summary className='spaces'><span> <FaProjectDiagram/> &nbsp;Project  </span> <span>+</span></summary>
             <ul>
                <li> <NavLink to="/Home">All</NavLink></li>
                <li><NavLink to="/projectcreate">create   </NavLink></li>
                <li> Trashed</li>
             </ul>
              </details>  

              <details>
             <summary className='spaces'><span> <FaBoxes/>&nbsp; Product </span> <span> +</span></summary>
             <ul>
                <li><NavLink to="/Home"> All</NavLink></li>
                <li> <NavLink to="/productcreate">create   </NavLink></li>
                <li> Trashed</li>
             </ul>
              </details>  

              <details>
             <summary className='spaces'><span> <FaCartShopping/> &nbsp;Sell</span> <span> +</span></summary>
             <ul>
                <li><NavLink to="/Home"> All</NavLink></li>
                <li><NavLink to="sellcreate"> create   </NavLink></li>
                <li> Trashed</li>
             </ul>
             
              </details>  
              <details>
             <summary className='spaces'><span> <FaCartShopping/> &nbsp;Purchase</span> <span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <FaCartShopping/> &nbsp;Vendor</span><span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <FaCartShopping/> &nbsp;Employee</span><span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <IoPersonCircle/> &nbsp;Customer</span> <span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <FaFileInvoiceDollar/> &nbsp;Ledger</span> <span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span>  <BsBank2/>&nbsp;Bank Cash</span> <span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <FaCartShopping/> &nbsp;voucher</span> <span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <PiNewspaperClippingDuotone/> &nbsp;Repoat</span><span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <FaLanguage/> &nbsp;Language</span> <span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <IoPersonSharp/> &nbsp;User</span><span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <MdOutlinePersonAddDisabled/> &nbsp;Role Manage</span><span>+</span></summary>
             <ul>
                <li>All</li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
             
              </details> 
              <details>
             <summary className='spaces'><span> <IoSettingsSharp/> &nbsp;Settings</span><span>+</span></summary>
             
             
              </details> 

          {/* i am here */}

       






        </div>
        <div className='main_content'>
                       
                {/* <NavLink to="/homedashboard">   project</NavLink> */}

                    <div className='main_content_navbar'>    
                        
                                <button> Create</button>
                                <div>
                                            <span><NavLink to="/">  <IoMdHome/> &nbsp;Home</NavLink></span>
                                            <span><NavLink> <TbShoppingCart/>   &nbsp;Sell</NavLink></span>
                                            <span><NavLink>   <BiSolidDownArrowSquare/> &nbsp; All </NavLink></span>   
                                </div>     
                        
                    </div>
                     <div className='main_content_table_list'>
                              <div className='table_content_navbar'>
                                 <div>
                                     <button>All&nbsp;({length})</button>&nbsp;&nbsp;&nbsp;<button> Trash&nbsp;({7})</button>
                                 </div> 
                        

                                <form>
                                 <input type="search"/>
                                </form>

                              </div>
                                    
                              <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((row, index) => (
            <tr key={row.id}>
              <td><input type="checkbox" checked={row.checkbox} /></td>
              <td>{row.name}</td>
              <td>{row.location}</td>
              <td>{row.description}</td>
              <td><button onClick={() => handleEdit(row)}>Edit</button></td>
              <td><button onClick={() => handleDelete(row.Id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
            <th>Checkbox</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>


                      </div>
                  
                    
             

                   


        </div>
     
</div>



    </div>
  )
}

export default Home