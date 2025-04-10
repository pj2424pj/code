"use client"
import { useCodeEditorStore } from '@/store/useCodeEditorStore';
import React, { useState } from 'react'

function OutputPanel() {
  const { output, error, isRunning } = useCodeEditorStore();
  cosnt[ isCopied, setIsCopied] =useState(false);
  const hasContent = output || error;
  const handleCopy = async () => {
    if(!hasContent) return;
    await navigator.clipboard.writeText(output || error || '');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div>OutputPanel</div>
  )
}

export default OutputPanel