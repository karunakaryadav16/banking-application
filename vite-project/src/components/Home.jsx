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
                                     <button>All&nbsp;({6})</button>&nbsp;&nbsp;&nbsp;<button> Trash&nbsp;({7})</button>
                                 </div> 
                        

                                <form>
                                 <input type="search"/>
                                </form>

                              </div>
                                    
                                <table border="1">

                              <thead >
                                          <tr>
                                              <th>Header 1</th>
                                              <th>Header 2</th>
                                              <th>Header 3</th>
                                              <th>Header 4</th>
                                              <th>Header 4</th>

                                          </tr>
                              </thead>
                              <tbody>
                                      <tr>
            <td >Row 1, Cell 1</td>
            <td >Row 1, Cell 1</td>
            <td >Row 1, Cell 1</td>

            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
        </tr>
                              </tbody>
                              <tfoot>

                              </tfoot>

                              <tr>
                              <td >Row 1, Cell 1</td>
                              <td >Row 1, Cell 1</td>
                              <td >Row 1, Cell 1</td>

                              <td>Row 1, Cell 2</td>
                              <td>Row 1, Cell 3</td>       

                              </tr>
                                </table>



                      </div>
                  
                    
             

                   


        </div>
     
</div>



    </div>
  )
}

export default Home