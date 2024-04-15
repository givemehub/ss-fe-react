function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\d|\s+<|>\s+/g, ($1) =>
    $1.includes('>') ? '>' : $1.includes('<') ? '<' : ''
  );
}

export default removeSpaceHTMLString;
