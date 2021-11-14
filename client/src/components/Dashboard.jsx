import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import Contentarea from "./contentarea";
import Footers from "./Footer";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Contentarea />
        </div>
      </div>
      <Footers />
    </div>
  );
}
