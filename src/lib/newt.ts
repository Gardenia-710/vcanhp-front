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

export type Activity = {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
  };
  title: string;
  description: string;
  body: string;
  thumbnail: {
    src: string;
  };
};

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export const previewClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_API_TOKEN,
  apiType: "api",
});

export const getActivityPreview = async (postId: string) => {
  return await previewClient.getContent<Activity>({
    appUid: import.meta.env.NEWT_APP_UID,
    modelUid: "activity",
    contentId: postId,
  });
};
