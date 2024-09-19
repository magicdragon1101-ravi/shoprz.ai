import { useState } from "react";
import Header from "../element/Header";
import Sider from "../element/Sider";

const MainLayout = ({ children }) => {
  const [menuHandler, setMenuHandler] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <Header callback={() => setMenuHandler(true)} />
      <main className="flex flex-row flex-1">
        <Sider visible={menuHandler} setVisible={setMenuHandler} />
        <div className="flex flex-auto overflow-hidden">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
