function getPublic(filePath) {
  return import.meta.env.BASE_URL + filePath;
}

export default getPublic;
