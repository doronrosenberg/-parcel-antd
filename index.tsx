import { Popconfirm } from "antd";
import * as React from "react";
import { createRoot } from "react-dom";

const rootNode = document.getElementById("app");
const root = createRoot(rootNode!);

root.render(
  <Popconfirm
    title=""
    />
);