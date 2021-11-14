import React from "react";
import { Menu } from "antd";
import {
  PieChartOutlined,
  DashboardOutlined,
  MailOutlined,
  FunnelPlotOutlined,
  TeamOutlined,
  SettingOutlined,
  BookOutlined,
  CreditCardOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const Sidebar = () => {
  return (
    <Menu
      style={{
        width: 256,
        height: "100%",
        backgroundColor: "black",
        color: "white",
        position: "fixed",
        top: "0px",
      }}
    >
      <Item
        key="1"
        icon={<DashboardOutlined style={{ fontSize: "26px" }} />}
        style={{ fontSize: "25px" }}
      >
        DashBoard Kit
      </Item>
      <Item key="2" icon={<PieChartOutlined />}>
        Overview
      </Item>
      <Item key="3" icon={<CreditCardOutlined />}>
        Tickets
      </Item>
      <Item key="4" icon={<FunnelPlotOutlined />}>
        Ideas
      </Item>
      <Item key="5" icon={<TeamOutlined />}>
        Contacts
      </Item>
      <Item key="6" icon={<UserOutlined />}>
        Agents
      </Item>
      <Item key="7" icon={<BookOutlined />}>
        Articles
      </Item>
      <Item key="8" icon={<SettingOutlined />}>
        Setting
      </Item>
      <Item key="9" icon={<MailOutlined />}>
        Subscription
      </Item>
    </Menu>
  );
};
export default Sidebar;
