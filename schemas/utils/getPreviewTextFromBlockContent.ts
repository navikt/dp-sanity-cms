function getPreviewTextFromBlockContent(blocks?: any[]) {
  const firstBlock = (blocks || []).find((block) => block._type === "block");
  return (
    firstBlock?.children
      .filter((child) => child._type === "span")
      .map((span) => span.text)
      .join("") || "No text"
  );
}

export default getPreviewTextFromBlockContent;
