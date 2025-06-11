"use client";
import React, { useState } from 'react'
interface CodeBlockProps {
  code: string;
  language: string;
}



const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const lines = code.split("\n");
  const displayCode = isExpanded ? code : lines.slice(0, 6).join("\n");
  return (
    <div>CodeBlock</div>
  )
}

export default CodeBlock