import absoluteUrl from "next-absolute-url";

function getOrigin(req: any) {
  const { origin } = absoluteUrl(req);
  return origin;
}

export const getSkillsURL = (req: any) => {
  return fetch(getOrigin(req) + "/skills");
};

export const getProjectsURL = (req: any, limit: number) => {
  return fetch(getOrigin(req) + `/projects/?limit=${limit}`);
};
