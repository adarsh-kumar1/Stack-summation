import { PageHeader } from "antd";
import { Avatar, Image } from "antd";
import { UserOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;
const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      style={{ marginLeft: "260px" }}
      title="Tickets"
      extra={[<SearchOutlined />, <BellOutlined />, <Avatar>U</Avatar>]}
    />
  );
};
export default Header;
