import React from "react";
import "./sport.css";

const SkeletonLoading: React.FC = () => {
  return (
    <div className="content-box1 animate-loading">
      <div className="image-wrapper-loading relative">
        <div className="w-[300px] h-[200px] object-cover rounded-t-lg min-[1024px]:rounded-l-lg relative">
          <div className="square-box animate-loading"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-black text-center">
            <div className="text-lg font-bold mb-2">
              <b>
                <div
                  className="mx-auto"
                  style={{ width: "100px", height: "25px", backgroundColor: "#67696b" }}
                ></div>
              </b>
            </div>
            <div className="text-lg font-bold mb-2">
              <div
                className="mx-auto"
                style={{ width: "500px", height: "25px", backgroundColor: "#67696b" }}
              ></div>
            </div>
            {/* Add other details like summary or date if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
