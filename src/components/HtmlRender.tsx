"use client";

import React, { useEffect, useState } from "react";

export default function HTMLRenderer({ html }: { html: string | TrustedHTML }) {
  const [renderedHtml, setRenderedHtml] = useState<string | TrustedHTML>("");

  useEffect(() => {
    // Update the rendered HTML only if html is defined
    if (html) {
      setRenderedHtml(html);
    }
  }, [html]);

  // Render content only if it exists
  if (!renderedHtml) {
    return <div>Loading...</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
}
