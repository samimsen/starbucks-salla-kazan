import { BsFillSunFill } from 'react-icons/bs';

const Header = () => {
    return (
        <div style={{display:'flex', alignItems:'center', fontWeight:'bold', marginLeft:"20px", marginTop:"30px"}}>
            <div style={{fontSize:"30px"}}>Good Morning Samim</div>
            <BsFillSunFill size="30px" style={{marginLeft:"20px", color:'yellow'}} />
        </div>
    )
}

export default Header