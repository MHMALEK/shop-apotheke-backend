type GitHubQueryCreatorPayloadModel = {
  language: string;
  sortBy: string;
  createdDate: string;
  order: string;
};

type GitHubQueryCreatorModel = (
  payload: any
) => string;

export { GitHubQueryCreatorModel };
