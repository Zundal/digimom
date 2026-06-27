import type { FC } from "react";
import SensesGateway from "./SensesGateway";
import TransductionFlow from "./TransductionFlow";
import BottomUpTopDown from "./BottomUpTopDown";
import GestaltPrinciples from "./GestaltPrinciples";
import MemoryFlow from "./MemoryFlow";
import WorkingMemory from "./WorkingMemory";

// In-post infographics. A body paragraph of the form "::figure:<id>::"
// is replaced by the matching component (see pages/Post.tsx).
export const FIGURES: Record<string, FC> = {
  sensesGateway: SensesGateway,
  transduction: TransductionFlow,
  bottomUpTopDown: BottomUpTopDown,
  gestalt: GestaltPrinciples,
  memoryFlow: MemoryFlow,
  workingMemory: WorkingMemory,
};

export const FIGURE_RE = /^::figure:([a-zA-Z]+)::$/;
