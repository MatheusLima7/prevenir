export type SupportedsArgProps = {
  supportedId: string;
};

export type SupportedsProps = {
  name: string;
  id: string;
  phone: string;
  status: boolean;
};

export type SupportedResponse = {
  data: SupportedsProps[];
};

export type Supporteds = {
  supporteds: SupportedsProps[];
};
