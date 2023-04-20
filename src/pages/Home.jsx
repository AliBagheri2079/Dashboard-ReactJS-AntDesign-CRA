import React from "react";
import { Divider, Layout, theme } from "antd";

import PageBreadcrumb from "../components/breadcrumb/PageBreadcrumb";
import UserFormData from "../components/form/UserFormData";
import FloatButtonComponent from "../components/button/FloatButton";
import DemoStock from "../components/chart/DemoStock";
const { Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        marginInline: "1rem",
      }}
    >
      <PageBreadcrumb />

      <div
        style={{
          padding: 24,
          minHeight: 500,
          background: colorBgContainer,
        }}
      >
        <DemoStock />
        <Divider />
        <UserFormData />
      </div>

      <FloatButtonComponent />
    </Content>
  );
};

export default Home;
