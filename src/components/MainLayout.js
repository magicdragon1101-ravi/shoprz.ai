import { useState } from "react";
import Header from "./Header";
import Sider from "./Sider";

const MainLayout = ({ children }) => {
  const [menuHandler, setMenuHandler] = useState(false);
  return (
    <div className="flex flex-col flex-1">
      <Header callback={() => setMenuHandler(!menuHandler)} />
      <main className="flex flex-row flex-1">
        <Sider visible={menuHandler} setVisible={setMenuHandler} />
        <div className="flex flex-auto overflow-hidden">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
