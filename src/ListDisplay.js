
import OneObjectList from "./OneObjectList";
import "./Donation";
const ListDisplay = ({ arr }) => {
    let arrDonates = [...arr]
    return (<><div className="contributors-list">{arrDonates.map(((item, index) => { return <OneObjectList key={index} MyItem={item} /> }))}</div>
    </>
    );
}

export default ListDisplay;