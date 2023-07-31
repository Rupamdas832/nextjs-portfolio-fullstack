export const originUrl = process.env.SERVER;

export const getSkillsURL = (req: any) => {
  return fetch(originUrl + "/skills");
};

export const getProjectsURL = (req: any, limit: number) => {
  return fetch(originUrl + `/projects/?limit=${limit}`);
};
