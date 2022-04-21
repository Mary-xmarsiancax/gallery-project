import "./preloader.scss"
import {Spinner} from "react-bootstrap";

const Preloader = () => {
    return (
        <div className="preloader">
            <Spinner className={"spinner"} animation="grow" variant="info"  />
        </div>
    )
}
export default Preloader;