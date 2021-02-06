type GitHubQueryCreatorPayloadModel = {
  language: string;
  sortBy: string;
  createdDate: string;
  order: string;
  perPage: string;
  page: string;
};

type GitHubQueryCreatorModel = (payload: any) => string;

export { GitHubQueryCreatorModel };
