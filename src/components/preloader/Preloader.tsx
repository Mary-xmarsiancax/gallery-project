import "./preloader.scss"
import {Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/store";

const Preloader = () => {
    const isLoading = useSelector<AppState>((state) => state.isLoading) as boolean;
    return isLoading ?
        <div className="preloader">
            <Spinner className={"spinner"} animation="grow" variant="info"/>
        </div> : <></>
}
export default Preloader;