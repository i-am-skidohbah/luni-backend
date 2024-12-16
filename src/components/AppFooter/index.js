import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="h-[50px] flex justify-evenly items-center border-t-2 border-gray-500">
      <Typography.Link href="tell: +2349159286029">
        +2349159286029
      </Typography.Link>
      <Typography.Link href="#">Terms of use</Typography.Link>
      <Typography.Link href="+2349159286029">Policy privacy</Typography.Link>
    </div>
  );
};

export default AppFooter;
