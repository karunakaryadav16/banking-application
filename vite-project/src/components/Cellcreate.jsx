import React from 'react'
import "./Cellcreate.css"
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
function Home() {
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
                <li><NavLink to="/Home"> All</NavLink></li>
                <li> <NavLink to="/projectcreate">  create</NavLink></li>
                <li> Trashed</li>
             </ul>
              </details>  

              <details>
             <summary className='spaces'><span> <FaBoxes/>&nbsp; Product </span> <span> +</span></summary>
             <ul>
                <li><NavLink to="/Home"> All</NavLink></li>
                <li> <NavLink to="/productcreate"> create  </NavLink></li>
                <li> Trashed</li>
             </ul>
              </details>  

              <details>
             <summary className='spaces'><span> <FaCartShopping/> &nbsp;Sell</span> <span> +</span></summary>
             <ul>
                <li><NavLink to="/Home"> All</NavLink></li>
                <li> <NavLink to="/sellcreate"> create   </NavLink></li>
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
                                <h2> Create Sell manage</h2>
                                <span> Put Sell Manage Information</span>
                                    <form className='form'>
                                    <select id="cars" name="cars">
                                    <option value="" disabled select> Real</option>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                               <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                    </select>
                                    <select id="cars" name="cars">
                                    <option value="" disabled select>Select Project Name</option>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                               <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                    </select> <select id="cars" name="cars">
                                    <option value="" disabled select>Select Product ID</option>

                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                               <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                    </select>
                                    
                                     
                                    
                                    
                                    </form>


                            <div className='date_container'>         
                                    <form>
                                            <select id="cars" name="cars">
                                                <option value="" disabled select> Select Employee Name</option>
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="fiat">Fiat</option>
                                                            <option value="audi">Audi</option>
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="fiat">Fiat</option>
                                                            <option value="audi">Audi</option>
                                                        <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="fiat">Fiat</option>
                                                            <option value="audi">Audi</option>
                                                </select>
                                            <input   className='cellcreate'  type="date" id="birthday" name="birthday"/>

                                    </form>   
                            </div>   
                                            

                                                        
                                            

                              </div>
                                    
                            



                      </div>
                  
                    
             

                   


        </div>
     
</div>



    </div>
  )
}

export default Home