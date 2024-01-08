import React from 'react'
import "./DashBoard.css";
import { NavLink } from 'react-router-dom';
// import { IoMdHome } from "react-icons/io";
// import { BiSolidDownArrowSquare } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
// import { TbShoppingCart } from "react-icons/tb";
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
            <NavLink t0="/"> <h2>  <MdDashboard/> &nbsp; DashBoard </h2> </NavLink>
              

              <details>
             <summary className='spaces'><span> <FaProjectDiagram/> &nbsp;Project  </span> <span>+</span></summary>
             <ul>
                <li> <NavLink to="/Home"> All</NavLink></li>
                <li> <NavLink to="projectcreate">  create</NavLink></li>
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
             <summary className='spaces'><span> <PiNewspaperClippingDuotone/> &nbsp;Report</span><span>+</span></summary>
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
            <h3> DashBoard</h3>
                       

            <div className='big_cards_container'>    
                    <div className='big_card'><FaProjectDiagram className='fonts'/> <h4>Project &nbsp; 50 </h4></div>  
                    <div className='big_card'><FaFileInvoiceDollar className='fonts'/><h4>Ledger Type &nbsp; 22</h4></div>  
                    <div className='big_card'><FaFileInvoiceDollar className='fonts'/><h4>Ledger Group &nbsp; 49</h4></div>  
                    <div className='big_card'><FaFileInvoiceDollar className='fonts'/><h4>Ledger &nbsp; 61</h4></div>  
                    <div className='big_card'><BsBank2 className='fonts'/><h4>Bank or Cash &nbsp;</h4> 9</div>  
                    <div className='big_card'><IoPersonSharp className='fonts'/><h4>User &nbsp;</h4> 7</div>  
                    <div className='big_card'><MdOutlinePersonAddDisabled className='fonts'/><h4>Role Manage &nbsp; </h4> 7</div>  
                    <div className='big_card'><PiNewspaperClippingDuotone className='fonts'/><h4>Report &nbsp; </h4> 14</div>  
           </div>
           <div>
            <h5> quick Access</h5>
            <div className='quickaccess_container'>
                       <div><a> <NavLink to="/projectcreate">  Project  </NavLink></a></div>
                       <div><a> <NavLink to="/productcreate">   Product</NavLink> </a></div>
                       <div><a><NavLink to="/sellcreate">sell   </NavLink> </a></div>
                       <div><a> PurChase Requisition</a></div>
                       <div><a> Purchase Order</a></div>
                       <div><a> Vendor</a></div>
                       <div><a> Employee</a></div>
                       <div><a> Customer</a></div>
                       <div><a> Ledger</a></div>
                       <div><a> Trial Balance</a></div>
                       <div><a> Cost Of Revenue</a></div>
                       <div><a> Profit Or Loss Account</a></div>
                       <div><a> Retained Earnings</a></div>
                       <div><a> Fixed Asset Schedule</a></div>
                       <div><a> Balance</a></div>
                       <div><a> Balance Sheet</a></div>
                       <div><a> Cash Flow</a></div>
                       <div><a> receive Payment</a></div>
                       <div><a> Ledger Type</a></div>
                       <div><a> Ledger Group</a></div>
                       <div><a> Debit Voucher</a></div>
                       <div><a> Credit VOucher</a></div>
                       <div><a>  Journal Voucher</a></div>
                       <div><a>  Contra Voucher</a></div>




            </div>
            <div className='images_container'>
                <div className='leftimageparentcontainer'> 
                        <div className='leftimagecontainer'>
                                 <h4> Profit or Loss</h4>
                                 <select id="cars" name="cars">
                                          <option value="branch" disabled select>Select Branch</option>

                                                      <option value="volvo">Head office</option>
                                                      <option value="saab">Rajshahi office</option>
                                                      <option value="fiat">Borno 3</option>
                                                      <option value="audi">Narayanganj</option>
                                                      <option value="volvo">text project MMp</option>
                                                      <option value="saab">6786868</option>
                                                      <option value="fiat">kothi</option>
                                                      <option value="audi">Narayanganj2</option>
                                                   <option value="volvo">Relic tower</option>
                                                      <option value="saab">Adoni</option>
                                                      <option value="fiat">dhaka 1</option>
                                                      <option value="audi">sop</option>
                                          </select>

                                          <select id="cars" name="cars">
                                          <option value="" disabled select>Select Year</option>

                                                      <option value="volvo">2020</option>
                                                      <option value="saab">2021</option>
                                                      <option value="fiat">2022</option>
                                                      <option value="audi">2023</option>
                                                      <option value="volvo">2024</option>
                                                      <option value="saab">2025</option>
                                                      <option value="fiat">2026</option>
                                                      <option value="audi">2027</option>
                                                   <option value="volvo">2028</option>
                                                      <option value="saab">2029</option>
                                                      <option value="fiat">2030</option>
                                                      <option value="audi">2031</option>
                                          </select>
                        </div>
                        <div>
                    <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1704689572/IMG-20240108-WA0002_galwpg.jpg"/>

                        </div>
                        
                                 


                </div>
                <div className='rightsideimagecontainer'>
                    <div className='rightsideimageparentcontainer'>
                                 <h4> Total Voucher</h4>
                                 <select id="cars" name="cars">
                                          <option value="branch" disabled select>Select Branch</option>

                                                      <option value="volvo">Head office</option>
                                                      <option value="saab">Rajshahi office</option>
                                                      <option value="fiat">Borno 3</option>
                                                      <option value="audi">Narayanganj</option>
                                                      <option value="volvo">text project MMp</option>
                                                      <option value="saab">6786868</option>
                                                      <option value="fiat">kothi</option>
                                                      <option value="audi">Narayanganj2</option>
                                                   <option value="volvo">Relic tower</option>
                                                      <option value="saab">Adoni</option>
                                                      <option value="fiat">dhaka 1</option>
                                                      <option value="audi">sop</option>
                                          </select>

                                          <select id="cars" name="cars">
                                          <option value="" disabled select>Select Year</option>

                                                      <option value="volvo">2020</option>
                                                      <option value="saab">2021</option>
                                                      <option value="fiat">2022</option>
                                                      <option value="audi">2023</option>
                                                      <option value="volvo">2024</option>
                                                      <option value="saab">2025</option>
                                                      <option value="fiat">2026</option>
                                                      <option value="audi">2027</option>
                                                   <option value="volvo">2028</option>
                                                      <option value="saab">2029</option>
                                                      <option value="fiat">2030</option>
                                                      <option value="audi">2031</option>
                                          </select>
                        </div>
                     
                  <div>
                    
                                                
                    <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1704689616/IMG-20240108-WA0003_tl8m17.jpg"/>

                  </div>

                </div>




            </div>


           </div>

                     
                    
             

                   


        </div>
     
</div>



    </div>
  )
}

export default Home
























