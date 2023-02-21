export type Parameter = {
  name: string;
  in: string;
  required: boolean;
  schema: {
    type: string;
  };
}

export type Response = {
  description: string;
}

export type MethodData = {
  summary: string;
  description: string;
  parameters?: Parameter[];
  responses?: Record<string, Response>;
}

export type PathInfo = {
  path: string;
  method: string;
  summary: string;
  description: string;
  parameters?: Parameter[];
  responses?: Record<string, Response>;
}