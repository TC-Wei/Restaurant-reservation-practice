import { Divider, Row, Col } from "antd";
import dayjs from "dayjs";

function TimeSlots(props) {
  const isToday = props.date.isSame(dayjs(), "day");
  return (
    <>
      <Divider>{props.title}</Divider>
      <div>
        <Row gutter={[{ xs: 8, md: 20 }, 20]}>
          {props.times.map((time) => {
            const parts = time.split(":");
            const slotTime = dayjs().hour(parts[0]).minute(parts[1]);
            const isPast = isToday && slotTime.isBefore(dayjs());
            return (
              <Col key={time} xs={6} md={4}>
                <button
                  className={props.selected === time ? "active" : ""}
                  onClick={() => props.onSelect(time)}
                  disabled={isPast}
                >
                  {time}
                </button>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
export default TimeSlots;
