import { Layout } from "antd";

import SideBar from "./SideBar";
import BodyFooter from "./Footer";

const Main = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SideBar />

      <Layout className="site-layout">
        {children}
        <BodyFooter />
      </Layout>
    </Layout>
  );
};
export default Main;
