import React from 'react'
import "./Projectcreate.css"
import { useDispatch } from 'react-redux';
import {setUserDetails} from "../Store.jsx";
import { v4 as uuid } from "uuid";

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
 import { useState } from 'react';
function Home() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [location, setLocation] = useState('');
   const [description, setDescription] = useState('');
   const Id = uuid();   
 
   const handleSave = () => {
     dispatch(setUserDetails({ Id,name, location, description }));
     setName('');
     setLocation('');
     setDescription('');
     alert('Data saved successfully');
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
                <li> <NavLink to="/Home"> All</NavLink></li>
                <li>create</li>
                <li> Trashed</li>
             </ul>
              </details>  

              <details>
             <summary className='spaces'><span> <FaBoxes/>&nbsp; Product </span> <span> +</span></summary>
             <ul>
                <li><NavLink to="/Home"> All</NavLink></li>
                <li> <NavLink to="/productcreate"> create </NavLink></li>
                <li> Trashed</li>
             </ul>
              </details>  

              <details>
             <summary className='spaces'><span> <FaCartShopping/> &nbsp;Sell</span> <span> +</span></summary>
             <ul>
                <li><NavLink to="/Home"> All</NavLink></li>
                <li><NavLink to="/sellcreate"> create   </NavLink></li>
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
                              <div className='table_content_creation'>
                                <h1> Create Project Name</h1>
                                <form className='form'>
        <input value={name} onChange={(e) => setName(e.target.value)} className="createinput" type="text" placeholder='Name' required/>
        <input value={location} onChange={(e) => setLocation(e.target.value)} className="createinput" type="text" placeholder='Location' required/>
      </form>
                                                        
      <div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='textarea' rows="2" placeholder='Description'></textarea>
      </div>
                                            

                              </div>
                                    
                              <button onClick={handleSave}>Save</button>


                      </div>
                  
                    
             

                   


        </div>
     
</div>



    </div>
  )
}

export default Home