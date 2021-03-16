export const accountTypeDescription = (
  description: string,
  replacements: string[]
) => {
  const splitDescriptionArr = description.split("$");
  if (splitDescriptionArr.length !== replacements.length + 1) {
    throw new Error(
      "The length of replacements doesn't match the length of substitutions"
    );
  }
  const replacedDesArr = splitDescriptionArr.map((sd, index) => {
    if (index) {
      return sd.replace(`${index}`, replacements[index - 1]);
    }
    return sd;
  });
  return replacedDesArr.join("").split('\n');
};
