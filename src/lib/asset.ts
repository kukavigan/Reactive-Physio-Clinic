export const assetUrl = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;
