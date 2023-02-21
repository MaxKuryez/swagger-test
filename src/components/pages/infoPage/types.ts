export type InfoPagePayload = {
  title: string;
  description: string;
  termsOfService: string;
  license: {
    url: string
    name: string;
  };
  contact: {
    email: string;
  };
  version: string;
};
