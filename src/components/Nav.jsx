import { IoIosMailUnread } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { FiSettings } from 'react-icons/fi';

const Nav = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:"space-between"}}>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: "20px" }}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "20px" }}><IoIosMailUnread size="30px" color='#00713E' />
                <span style={{marginLeft:"10px", cursor:'pointer'}}>Inbox</span></div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "20px" }}><SlCalender size="20px" />
                <span style={{marginLeft:"10px", cursor:'pointer'}}>History</span></div>
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop: "20px", marginRight:"10px"}}>
                <FiSettings style={{cursor:'pointer'}} size="20px" />
            </div>
        </div>
    )
}

export default Nav