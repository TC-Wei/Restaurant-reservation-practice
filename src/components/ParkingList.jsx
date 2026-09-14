import { Divider } from "antd";

function ParkingList(props) {
  return (
    <>
      <h4>停車場</h4>
      <h5>點擊名稱進行導航</h5>
      <div>
        {props.lots.map((park) => (
          <div key={park.name}>
            <a href={park.map}>{park.name}</a>
            距離 {park.distance} 收費方式 {park.fee}
          </div>
        ))}
      </div>
      <Divider />
    </>
  );
}
export default ParkingList;
