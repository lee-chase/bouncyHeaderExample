import "./config";
import { PageHeader } from "@carbon/ibm-cloud-cognitive";
import React from "react";
import { render } from "react-dom";
import { InformationFilled16, NextFilled32 } from "@carbon/icons-react";

import "@carbon/ibm-cloud-cognitive/css/index.min.css";

const App = () => (
  <>
    <PageHeader
      background
      title="Test"
      // breadcrumbItems={[]}
      actionBarItems={[
        {
          iconDescription: "hello",
          renderIcon: NextFilled32
        },
        {
          iconDescription: "hello",
          renderIcon: InformationFilled16
        }
      ]}
    />
    <div className="content" style={{ minHeight: "150vh" }}>
      {" "}
      Some content{" "}
    </div>
  </>
);

render(<App />, document.getElementById("root"));
