export const valueHasOp = (text: string) => {
  if (text.length === 0) {
    return false;
  }

  if (
    text[text.length - 1] === '+' ||
    text[text.length - 1] === '-' ||
    text[text.length - 1] === '*' ||
    text[text.length - 1] === '/' ||
    text[text.length - 1] === '%' ||
    text[text.length - 1] === '()' ||
    text[text.length - 1] === '(' ||
    text[text.length - 1] === ')'
  ) {
    return false;
  }

  for (let index = 0; index < text.length; index++) {
    if (
      text[index] === '+' ||
      text[index] === '-' ||
      text[index] === '*' ||
      text[index] === '/' ||
      text[index] === '%'
    ) {
      return true;
    }
  }
  return false;
};
