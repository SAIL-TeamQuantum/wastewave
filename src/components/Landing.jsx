import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate() 
    return ( 
        <div>landing page
             <button onClick={()=>navigate("/UserSelectMenu")}>signup</button>
        </div>
       
     );
}
 
export default Landing;

