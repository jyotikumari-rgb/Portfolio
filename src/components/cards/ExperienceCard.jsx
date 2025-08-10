


import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const NumberBadge = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: absolute;
  top: -10px;
  left: -10px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        position: "relative",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "#fff" }}
      icon={
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
          <img
            src={experience.img}
            alt={experience.company}
            style={{ width: "60%", height: "60%", objectFit: "contain" }}
          />
        </div>
      }
    >
      <NumberBadge>{experience.number}</NumberBadge>
      <h3 className="vertical-timeline-element-title">{experience.role}</h3>
      <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
      <p>{experience.desc}</p>
      <div style={{ marginTop: 10 }}>
        {experience.skills.map((skill, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              background: "#383e56",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              marginRight: "5px",
              fontSize: "12px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
