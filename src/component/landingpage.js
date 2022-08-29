import './indexCom.css';
import {useNavigate} from "react-router-dom";


export const Landing = () =>{
    const navigate = useNavigate();
    return(
        <div className='center'>
            <p className = 'font-bold text-2xl text-center text-red-600'>Landing Page</p>
            <button className="border-2" class="btn btn-red" onClick= {() => navigate('/myprofile')}>Go to My profile</button>
        </div>
    )
}