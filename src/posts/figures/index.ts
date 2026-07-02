import type { FC } from "react";
import SensesGateway from "./SensesGateway";
import TransductionFlow from "./TransductionFlow";
import BottomUpTopDown from "./BottomUpTopDown";
import GestaltPrinciples from "./GestaltPrinciples";
import MemoryFlow from "./MemoryFlow";
import WorkingMemory from "./WorkingMemory";
import CheongyakSupply from "./CheongyakSupply";
import CheongyakPortal from "./CheongyakPortal";
import CheongyakRank from "./CheongyakRank";
import CheongyakPoints from "./CheongyakPoints";
import CheongyakTimeline from "./CheongyakTimeline";
import Invest1Figure from "./Invest1Figure";
import Invest2Figure from "./Invest2Figure";
import Invest3Figure from "./Invest3Figure";
import Invest4Figure from "./Invest4Figure";
import Invest5Figure from "./Invest5Figure";
import HomeRule1Figure from "./HomeRule1Figure";
import HomeRule2Figure from "./HomeRule2Figure";
import HomeRule3Figure from "./HomeRule3Figure";

// In-post infographics. A body paragraph of the form "::figure:<id>::"
// is replaced by the matching component (see pages/Post.tsx).
export const FIGURES: Record<string, FC> = {
  sensesGateway: SensesGateway,
  transduction: TransductionFlow,
  bottomUpTopDown: BottomUpTopDown,
  gestalt: GestaltPrinciples,
  memoryFlow: MemoryFlow,
  workingMemory: WorkingMemory,
  cheongyakSupply: CheongyakSupply,
  cheongyakPortal: CheongyakPortal,
  cheongyakRank: CheongyakRank,
  cheongyakPoints: CheongyakPoints,
  cheongyakTimeline: CheongyakTimeline,
  invest1Figure: Invest1Figure,
  invest2Figure: Invest2Figure,
  invest3Figure: Invest3Figure,
  invest4Figure: Invest4Figure,
  invest5Figure: Invest5Figure,
  homeRule1Figure: HomeRule1Figure,
  homeRule2Figure: HomeRule2Figure,
  homeRule3Figure: HomeRule3Figure,
};

export const FIGURE_RE = /^::figure:([a-zA-Z0-9]+)::$/;
