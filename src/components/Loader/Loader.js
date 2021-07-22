import Loader from "react-loader-spinner";
import './loader.css'

const Loader = () => {
    return (
        <div className="loader_container">
            <Loader
                type="circle"
                color="#1B4B0A"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    )
}