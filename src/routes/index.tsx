import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GoldRates } from "@/components/GoldRates";
import { Featured } from "@/components/Featured";
import { CraftFilm } from "@/components/CraftFilm";
import { StoryEditorial } from "@/components/StoryEditorial";
import { Reels } from "@/components/Reels";
import { CustomRequest } from "@/components/CustomRequest";
import { Hallmark } from "@/components/Hallmark";
import { CareTips } from "@/components/CareTips";
import { Showroom } from "@/components/Showroom";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <GoldRates />
      <Featured />
      <CraftFilm />
      <StoryEditorial />
      <Reels />
      <CustomRequest />
      <Hallmark />
      <CareTips />
      <Showroom />
      <Reviews />
      <Gallery />
      <Contact />
    </>
  );
}
