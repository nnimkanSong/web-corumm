import React from "react";
import { useParams } from "react-router-dom";
import Content1 from "./Content1";
import Content2 from "./Content2";
import NotFound from "../ui/NotFound";

const componentMap = {
  1: Content1,
  2: Content2,
  // Add more mappings here as needed
};

const Index = () => {
  const { id } = useParams();
  const ComponentToRender = componentMap[id];
  return <div>{ComponentToRender ? <ComponentToRender /> : <NotFound />} </div>;
};

export default Index;
