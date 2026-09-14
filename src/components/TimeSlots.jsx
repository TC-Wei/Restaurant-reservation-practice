import { Divider, Row, Col } from "antd";

function TimeSlots(props) {
  return (
    <>
      <Divider>{props.title}</Divider>
      <div>
        <Row gutter={[{ xs: 8, md: 20 }, 20]}>
          {props.times.map((time) => (
            <Col key={time} xs={6} md={4}>
              <button
                className={props.selected === time ? "active" : ""}
                onClick={() => props.onSelect(time)}
              >
                {time}
              </button>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
export default TimeSlots;
