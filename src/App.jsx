import { useState } from "react";
import "./App.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import {
  Divider,
  Col,
  Row,
  Select,
  Space,
  DatePicker,
  Button,
  message,
  Input,
  Checkbox,
} from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const noonReserve = [
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
];
const pmReserve = [
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
];
const nightReserve = [
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
];

const parkingLots = [
  {
    name: "安平古堡停車場",
    distance: "1km",
    fee: "50元/小時",
    map: "https://maps.app.goo.gl/xT8hoY93gBYkpxSd6",
  },
  {
    name: "安億停車場",
    distance: "1.5km",
    fee: "50元/小時",
    map: "https://maps.app.goo.gl/rZAvLKhzzDGMq2PR7",
  },
  {
    name: "漁人碼頭停車場",
    distance: "2km",
    fee: "40元/小時",
    map: "https://maps.app.goo.gl/gPU7WYNN82yMz5zk7",
  },
];
function App() {
  const [tab, setTab] = useState("booking");

  const [reservedTime, setReservedTime] = useState("");

  const [adult, setAdult] = useState(2);
  const [kid, setKid] = useState(0);
  const [date, setDate] = useState(dayjs());
  const [stage, setStage] = useState("select");
  /* 表單*/
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [agreed, setAgreed] = useState(false);
  /*訂位摘要，即時顯示人數、日期、時段*/
  const bottomReserve = `松風鍋物訂位資訊 ${adult}位大人,${kid}位小孩，預定時間
            ${date.format(dateFormat)}${reservedTime === "" ? "" : "，用餐時段"}
            ${reservedTime}`;
  const phoneValid = /^09\d{8}$/.test(phone);
  return (
    <div>
      <h1 className="topText">松風鍋物預約</h1>
      <header>
        <div className="navbar">
          <h2>松風鍋物</h2>
          <button>中文</button>
        </div>
        <Divider />
      </header>
      <main>
        <div className="hero">
          <div>
            <img className="topImg" src={img3} alt="image" />
          </div>
          <div className="tab-bar">
            <a
              className={tab === "booking" ? "active" : ""}
              onClick={() => {
                setTab("booking");
              }}
              href="#!"
            >
              我要訂位
            </a>
            <a
              className={tab === "parking" ? "active" : ""}
              onClick={() => {
                setTab("parking");
              }}
              href="#!"
            >
              停車場位置
            </a>
          </div>
        </div>
        <Divider />
        <div>
          <div>
            <div>松風鍋物</div>
            <div>台南市安平區中華西路</div>
          </div>
          <div>
            <div>電話 06-000000</div>
            <div>地圖 查看地圖</div>
          </div>
        </div>
        <Divider />
        {tab === "booking" && (
          <>
            {stage === "select" && (
              <>
                <div>
                  <p>訂位指南</p>
                  <p>營業時間：AM 11:00~21:00</p>
                  <p>（最後收客時間 19:45 ）</p>

                  <p>＃開放30天內預約訂位</p>
                  <p>✅店內禁止攜帶寵物，敬請見諒</p>
                  <p>✅用餐時間90分鐘</p>
                  <p>
                    ✅
                    線上預約提供1-6人訂位，若超過6人訂位請於營業時間內撥打門市專線進行訂位
                  </p>
                </div>
                <Divider />
                <div>
                  <Row>
                    <Col xs={16}>用餐人數</Col>
                    <Col xs={8}>用餐日期</Col>
                  </Row>
                  <div>
                    <Row>
                      <Col xs={8}>
                        <Select
                          value={adult}
                          style={{ width: "90%" }}
                          onChange={(value) => setAdult(value)}
                          options={[
                            {
                              value: 1,
                              label: "1位大人",
                              disabled: 1 + kid > 6,
                            },
                            {
                              value: 2,
                              label: "2位大人",
                              disabled: 2 + kid > 6,
                            },
                            {
                              value: 3,
                              label: "3位大人",
                              disabled: 3 + kid > 6,
                            },
                            {
                              value: 4,
                              label: "4位大人",
                              disabled: 4 + kid > 6,
                            },
                            {
                              value: 5,
                              label: "5位大人",
                              disabled: 5 + kid > 6,
                            },
                            {
                              value: 6,
                              label: "6位大人",
                              disabled: 6 + kid > 6,
                            },
                          ]}
                        />
                      </Col>
                      <Col xs={8}>
                        <Select
                          value={kid}
                          style={{ width: "90%" }}
                          onChange={(value) => setKid(value)}
                          options={[
                            {
                              value: 0,
                              label: "0位小孩",
                              disabled: 0 + adult > 6,
                            },
                            {
                              value: 1,
                              label: "1位小孩",
                              disabled: 1 + adult > 6,
                            },
                            {
                              value: 2,
                              label: "2位小孩",
                              disabled: 2 + adult > 6,
                            },
                            {
                              value: 3,
                              label: "3位小孩",
                              disabled: 3 + adult > 6,
                            },
                            {
                              value: 4,
                              label: "4位小孩",
                              disabled: 4 + adult > 6,
                            },
                            {
                              value: 5,
                              label: "5位小孩",
                              disabled: 5 + adult > 6,
                            },
                            {
                              value: 6,
                              label: "6位小孩",
                              disabled: 6 + adult > 6,
                            },
                          ]}
                        />
                      </Col>
                      <Col xs={8}>
                        <DatePicker
                          value={date}
                          onChange={(value) =>
                            setDate(value)
                          } /*onChange是元件自己判斷「值真的定了」之後才呼叫*/
                          style={{ width: "90%" }}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="Row">
                    <div>用餐時段</div>
                    <Divider>中午</Divider>
                    <div>
                      <Row gutter={[{ xs: 8, md: 20 }, 20]}>
                        {noonReserve.map((time) => (
                          <Col key={time} xs={6} md={4}>
                            <button
                              className={reservedTime === time ? "active" : ""}
                              onClick={() => setReservedTime(time)}
                            >
                              {time}
                            </button>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    <Divider>下午</Divider>
                    <div>
                      <Row gutter={[{ xs: 8, md: 20 }, 20]}>
                        {pmReserve.map((time) => (
                          <Col key={time} xs={6} md={4}>
                            <button
                              className={reservedTime === time ? "active" : ""}
                              onClick={() => setReservedTime(time)}
                            >
                              {time}
                            </button>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    <Divider>晚上</Divider>
                    <div>
                      <Row gutter={[{ xs: 8, md: 20 }, 20]}>
                        {nightReserve.map((time) => (
                          <Col key={time} xs={6} md={4}>
                            <button
                              className={reservedTime === time ? "active" : ""}
                              onClick={() => setReservedTime(time)}
                            >
                              {time}
                            </button>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                  <div>
                    <h4>定位以外需求請撥打</h4>
                    <p>電話 06-000000</p>
                  </div>
                  <Divider />
                  <div>
                    <h4>餐廳資訊</h4>
                    <div className="branch-info">
                      <div>
                        <iframe
                          title="餐廳位置地圖"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6059270428705!2d120.15804411115438!3d23.001514217026344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e767378e3e467%3A0x9b1e15dd6ac9adf1!2z5a6J5bmz5Y-k5aChICjnhrHomK3pga7ln44p!5e0!3m2!1szh-TW!2sus!4v1788183945909!5m2!1szh-TW!2sus"
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                      </div>
                      <div>
                        <div>
                          <div>位置</div>
                          <p>台南市安平區中華西路</p>
                        </div>
                        <div>
                          <div>電話</div>
                          <p>06-000000</p>
                        </div>
                        <div>
                          <div>營業時間</div>
                          <p>11:00~21:00</p>
                        </div>
                        <div>
                          <div>料理</div>
                          <p>鍋物</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>

                <div>
                  <div>
                    <h4>菜單</h4>
                  </div>
                  <div className="branch-menu">
                    <img className="menu-img" src={img4} alt="宣傳圖" />
                    <img className="menu-img" src={img2} alt="menu" />
                    <img className="menu-img" src={img1} alt="menu" />
                  </div>
                </div>
                <div className="reserve">
                  <div>{bottomReserve}</div>
                  <button
                    className="reserveBtn"
                    disabled={reservedTime === ""}
                    onClick={() => setStage("contact")}
                  >
                    {reservedTime === "" ? "請選擇用餐時段" : "預約"}
                  </button>
                </div>
              </>
            )}
            {stage === "contact" && (
              <>
                <div className="split">
                  <div>
                    <img src={img3} alt="image" />
                  </div>
                  <div>
                    <label className="redStay">姓名</label>
                    <Input
                      value={name}
                      placeholder="請輸入姓名"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="redStay">電話</label>
                    <Input
                      value={phone}
                      placeholder="請輸入電話"
                      onChange={(e) => setPhone(e.target.value)}
                      status={phone !== "" && !phoneValid ? "error" : ""}
                    />
                    {phone !== "" && !phoneValid ? (
                      <span className="error">格式錯誤</span>
                    ) : (
                      ""
                    )}

                    <label>E-mail</label>
                    <Input
                      value={email}
                      placeholder="請輸入E-mail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>備注</label>
                    <Input.TextArea
                      placeholder="如需其他問題，請輸入至這裡"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                    <label className="redStay">使用條款</label>
                    <Checkbox
                      style={{ color: "#fff" }}
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    >
                      已閱讀以上條款
                    </Checkbox>
                    <button
                      className="reserveBtn submitBtn"
                      disabled={
                        name === "" || phone === "" || !agreed || !phoneValid
                      }
                      onClick={() => setStage("done")}
                    >
                      {/* message.success(bottomReserve) */}
                      完成預約
                    </button>
                    <button
                      className="reserveBtn submitBtn"
                      onClick={() => {
                        setStage("select");
                      }}
                    >
                      回到首頁
                    </button>
                  </div>
                </div>
                <Divider />
              </>
            )}
            {stage === "done" && (
              <>
                <div className="success">
                  <h3>已完成預約</h3>
                  <div>{bottomReserve}</div>
                  <button
                    className="reserveBtn submitBtn"
                    onClick={() => {
                      setStage("select");
                      setReservedTime("");
                      setName("");
                      setPhone("");
                      setEmail("");
                      setNote("");
                      setAgreed(false);
                    }}
                  >
                    回到首頁
                  </button>
                </div>
                <Divider />
              </>
            )}
          </>
        )}
        {tab === "parking" && (
          <>
            <h4>停車場</h4>
            <h5>點擊名稱進行導航</h5>
            <div>
              {parkingLots.map((park) => (
                <div key={park.name}>
                  <a href={park.map}>{park.name}</a>
                  距離 {park.distance} 收費方式 {park.fee}
                </div>
              ))}
            </div>
            <Divider />
          </>
        )}
      </main>

      <footer>
        <section>
          <p>版權:© 2026 松風鍋物 All Rights Reserved.</p>
          <p>電話 06-000000、地址 台南市安平區中華西路</p>
          <span>
            <FacebookFilled />
          </span>
          <span>
            <InstagramFilled />
          </span>
        </section>
      </footer>
    </div>
  );
}

export default App;
