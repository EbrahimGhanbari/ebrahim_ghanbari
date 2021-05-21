import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import "./Courses.scss";

export default function () {
  return (
    <div className="course">
      <h2 className="resume_subtitle">Courses & Certificates</h2>
      <div className="course_1">
        <div>
          <h2>
            {" "}
            Learn & Understand NodeJS{" "}
            <a
              className="ext_link"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="https://www.udemy.com/course/understand-nodejs/"
            >
              <BiLinkExternal />
            </a>
          </h2>
          <dl>
            <dt>Udemy</dt>
          </dl>
        </div>
        <div>
          <h2>
            Machine Learning A-Z™: Hands-On Python & R In Data Science{" "}
            <a
              className="ext_link"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="https://www.udemy.com/course/machinelearning/"
            >
              <BiLinkExternal />
            </a>
          </h2>
          <dl>
            <dt>Udemy</dt>
          </dl>
        </div>

        <div>
          <h2>
            The Python Mega Course{" "}
            <a
              className="ext_link"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="https://www.udemy.com/course/the-python-mega-course/"
            >
              <BiLinkExternal />
            </a>
          </h2>
          <dl>
            <dt>Udemy</dt>
          </dl>
        </div>
        <div>
          <h2>
            Machine Learning Course{" "}
            <a
              className="ext_link"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="https://www.kaggle.com/"
            >
              <BiLinkExternal />
            </a>
          </h2>
          <dl>
            <dt>Kaggle</dt>
          </dl>
        </div>
      </div>
    </div>
  );
}
