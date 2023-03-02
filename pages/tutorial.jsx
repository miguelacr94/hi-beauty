import React, { useState } from "react";
import Video from "../core/components/shared/Video";
import MainLayout from "../core/layouts/MainLayout";
import { tutorial } from "../core/utils/data";

const Tutorial = () => {
  const [openModal, setOpenModal] = useState(false);
  const [video, setVideo] = useState(null);

  const tutorialSelected = (src) => {
    setVideo(src);
    if (src) {
      setOpenModal(true);
    }
  };

  const onClose = () => {
    setVideo("");
    setOpenModal(false);
  };

  return (
    <MainLayout>
      {tutorial.map((t, i) => {
        return (
          <div
            key={i}
            onClick={() => tutorialSelected(t.video)}
            className="bg-violet space-y-4 rounded-lg max-w-[800px] flex  justify-center  relative overflow-hidden
                            p-4 hover:scale-105 transform duration-300 shadow-lg"
          >
            <Video src={t.video} />
          </div>
        );
      })}

      {/* <div id="myModal" className={`modal ${openModal ? 'block' : 'hidden'}   flex justify-center items-start pt-10`}>


                <div className={`modal-content  mb-4 p-4 rounded-lg 'ml-0'}`}>
                    <p onClick={() => onClose()} className="flex items-end justify-end w-full text-lg cursor-pointer text-end">x</p>

                    <Video
                        src={video}
                    />
                </div>

            </div> */}
    </MainLayout>
  );
};

export default Tutorial;
