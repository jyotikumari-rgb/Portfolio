
import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of my projects.</Desc>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {toggle !== "all" &&
            projects
              .filter((item) => item.category === toggle)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
