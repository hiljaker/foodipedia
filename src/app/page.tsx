import React from "react";
import HomeView from "@src/views/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Foodipedia",
    default: "Foodipedia",
  },
};

const Home = () => {
  return <HomeView />;
};

export default Home;
