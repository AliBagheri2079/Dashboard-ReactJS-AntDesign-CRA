import { ConfigProvider } from "antd";
import Main from "./layout";
import Home from "./pages/Home";
import "antd/dist/reset.css";

const App = () => {
  return (
    <ConfigProvider>
      <Main>
        <Home />
      </Main>
    </ConfigProvider>
  );
};

export default App;
