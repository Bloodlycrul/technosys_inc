"use client";

import React, { useEffect, useState } from "react";

export default function HTMLRenderer({ html }: { html: string | TrustedHTML }) {
  const [renderedHtml, setRenderedHtml] = useState<string | TrustedHTML>("");

  useEffect(() => {
    if (html) {
      console.log(html);
      setRenderedHtml(html);
    }
  }, [html]);

  if (!renderedHtml) {
    return <div>Loading...</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
}
