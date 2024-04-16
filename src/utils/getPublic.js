// JSDoc
/**@type {(filePath: string) => string} */
export const getPublic = (filePath) => {
  return import.meta.env.BASE_URL + filePath;
};

export const getPublicAsset = (/**@type {string} */ filePath) =>
  getPublic(`assets/${filePath}`);
