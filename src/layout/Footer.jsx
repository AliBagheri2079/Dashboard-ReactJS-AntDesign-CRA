import React from "react";
import { Layout, Pagination } from "antd";

const { Footer } = Layout;

const BodyFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <Pagination showQuickJumper defaultCurrent={2} total={1000} />
    </Footer>
  );
};

export default BodyFooter;
