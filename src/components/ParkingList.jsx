import { Divider } from "antd";

function ParkingList(props) {
  return (
    <>
      <h4>停車場</h4>
      <h5>點擊名稱進行導航</h5>
      <div>
        {props.lots.map((park) => (
          <div key={park.name}>
            <a href={park.map} target="_blank" rel="noopener noreferrer">
              {park.name}
            </a>
            <ul>
              <li>距離 {park.distance}</li>
              <li>收費方式 {park.fee}</li>
              <li>注意事項 {park.note}</li>
            </ul>
          </div>
        ))}
      </div>
      <Divider />
    </>
  );
}
export default ParkingList;
