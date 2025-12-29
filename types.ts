
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

export interface ScenarioSection {
  title: string;
  subtitle?: string;
  items: string[];
  type: 'negative' | 'positive' | 'visual' | 'alert';
}

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  sections: ScenarioSection[];
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
