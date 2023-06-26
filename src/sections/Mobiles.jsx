import React from "react";
import Mobile from "../components/Mobile";
import Download from "../components/Download";
function Mobiles() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Mobile devices containers */}
      <div className="mobiles">
        <Mobile height={512} width={250} />
        <Mobile height={580} width={290} />
        <Mobile height={512} width={250} />
      </div>

      {/* AppStore and Googles Play Link */}
      <div className="hero-download">
        <Download />
      </div>
    </div>
  );
}

export default Mobiles;
