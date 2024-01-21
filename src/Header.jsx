import { IoIosArrowDown } from "react-icons/io";
import 
 { BsJustify}
 from 'react-icons/bs'
import { FaRegBell } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon' style={{display:'flex'}}>
        <BsJustify className='icon' onClick={OpenSidebar} />
        <div className='header-left'>
        Dashboard
      </div>
      </div>
      
      <div className='header-right' style={{ display: 'flex',flexShrink:'0', justifyContent: 'space-evenly' }}>
        <div style={{ background: "#fff", display: 'flex', alignItems: 'center', padding: "5px 5px",marginRight:'10px',marginLeft:'10px', borderRadius: '10px', height:'35px', boxShadow: ' 0px 0px 70px 0px rgba(0,0,0,0.45)' }}> <FaRegBell className='alerticon' style={{ color: 'darkgrey' }} /> <p style={{ background: 'red', margin: '0', padding: '0px 3px', color: 'white', borderRadius: '10px', }}>9+</p> </div>
        <div style={{ background: "#fff", display: 'flex', alignItems: 'center',marginRight:'10px', padding: "5px 5px,",height:'35px', borderRadius: '10px', boxShadow: ' 0px 0px 70px 0px rgba(0,0,0,0.45)', width:'150px', justifyContent:'space-evenly' }}> <svg xmlns="http://www.w3.org/2000/svg" width="30" style={{ margin: '5px',color:'black',flexShrink:'0' }} height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.99996 8.33332C11.8409 8.33332 13.3333 6.84094 13.3333 4.99999C13.3333 3.15904 11.8409 1.66666 9.99996 1.66666C8.15901 1.66666 6.66663 3.15904 6.66663 4.99999C6.66663 6.84094 8.15901 8.33332 9.99996 8.33332Z" stroke="#6B6B6B" />
          <path d="M16.6666 14.5833C16.6666 16.6541 16.6666 18.3333 9.99998 18.3333C3.33331 18.3333 3.33331 16.6541 3.33331 14.5833C3.33331 12.5125 6.31831 10.8333 9.99998 10.8333C13.6816 10.8333 16.6666 12.5125 16.6666 14.5833Z" stroke="#6B6B6B" />
        </svg> <p className='usernametop' style={{ margin: '0', color: 'darkgrey', flexShrink:'0'}}>@user-0001  </p> <IoIosArrowDown style={{margin:'5px',flexShrink:'0'}} /></div>

        <div></div>
      </div>
    </header>
  )
}

export default Header