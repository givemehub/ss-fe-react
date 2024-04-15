/** @type {(htmlString: string) => string} */

export const htmlRemoveReg = /\s+<|\n|>\s+/g;

export const removeSpaceHTMLString = (htmlString) =>
  htmlString.replace(htmlRemoveReg, ($1) =>
    $1.indexOf('<') > -1 ? '<' : $1.indexOf('>') > -1 ? '>' : ''
  );

// export function removeSpaceHTMLString(htmlString) {
//   return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
//     return $1.indexOf('<') > -1 ? '<' : $1.indexOf('>') > -1 ? '>' : '';
//   });
// }

// export removeSpaceHTMLString;
