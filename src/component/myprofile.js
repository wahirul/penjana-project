import './indexCom.css';
import {useNavigate} from "react-router-dom";

export const Profile = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <p className='font-bold text-2xl text-center text-green-600'>My name is Wahirul</p>
            <button className="border-2" class="btn btn-red" onClick= {() => navigate('/')}>Patah Balik</button>
        </div>
    )
}