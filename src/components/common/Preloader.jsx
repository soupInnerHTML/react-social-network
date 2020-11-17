/* Ultrashort name _ for root styles*/
import _ from "./Preloader.module.css";

const Preloader = (props) => (
    <div className={`${_.loader} ${props.isFetching ? _.loading : ''}`}></div>
)

export default Preloader