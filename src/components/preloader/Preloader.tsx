import preloader from "../../img/preloader.gif"
import "./preloader.scss"

const Preloader = () => {
    return (
        <div className="preloader">
            <img  src={preloader} alt="preloader"/>
        </div>
    )
}
export default Preloader;