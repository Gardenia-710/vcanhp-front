import { createClient } from "newt-client-js";

export type Member = {
  _id: string;
  name: string;
  title: string;
  type: string;
  image: {
    src: string;
  };
};

export type Advisor = {
  _id: string;
  name: string;
  title: string;
  comment: string;
  image: {
    src: string;
  };
};

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});
