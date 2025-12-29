
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ScenarioStep {
  label: string;
  content: string | string[];
}

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  before: {
    title: string;
    description: string;
    steps: string[];
  };
  after: {
    title: string;
    internalTitle: string;
    internalSteps: string[];
    userTitle: string;
    userSteps: string[];
    prepTitle?: string;
    prepSteps?: string[];
  };
  result: string[];
}

export interface Brique {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  objective: string;
  context: string;
  benefits: string[];
  features: Feature[];
  scenarios?: Scenario[];
  color: string;
  lightColor: string;
  tagline: string;
}

export type AppView = 'home' | 'brique-1' | 'brique-2' | 'brique-3' | 'assistant';
