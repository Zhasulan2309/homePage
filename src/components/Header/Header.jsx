import { Layout, Menu, Button, Space } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import logo from "@/assets/logo.jpg";
import "./Header.css";

const items = [
  { key: "about", label: <a href="#about">О компании</a> },
  { key: "services", label: <a href="#services">Услуги</a> },
  { key: "contacts", label: <a href="#contacts">Контакты</a> },
];

export default function Header() {
  return (
    <Layout.Header className="appHeader">
      <div className="appHeader__logoFixed">
        <img src={logo} alt="Technorium" />
      </div>

      <div className="appHeader__container">
        <Menu className="appHeader__menu" mode="horizontal" items={items} />
      </div>
    </Layout.Header>
  );
}
