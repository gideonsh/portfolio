import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const Work_item = (props) => {
  const [showRead, setShowRead] = useState(false);

  const openReadHandler = () => setShowRead(true);

  const closeReadHandler = () => setShowRead(false);

  return (
    <React.Fragment>
      <Modal
        show={showRead}
        onCancel={closeReadHandler}
        header={props.project}
        footer={
          <div>
            <Button modal href={props.href}>
              Code
            </Button>
            <Button modal onClick={closeReadHandler}>
              Close
            </Button>
          </div>
        }
      >
        <div>
          <h2>{props.txt}</h2>
          <br />
          <b>
            <h4>Stack: </h4>
          </b>
          <h4>{props.stack}</h4>
        </div>
      </Modal>

      {!props.mobile && (
        <div
          style={{ backgroundImage: `url(${props.img})` }}
          className={`grid-item group content-div on-screen`}
        >
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              {props.project}
            </span>
            <div className="pt-8 text-center">
              <Button work onClick={openReadHandler}>
                READ
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile */}
      {props.mobile && (
        <div
          style={{ backgroundImage: `url(${props.img})` }}
          className={`grid-item group content-div on-mobile`}
          onClick={openReadHandler}
        ></div>
      )}
    </React.Fragment>
  );
};

export default Work_item;
