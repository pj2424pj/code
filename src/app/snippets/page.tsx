"use client"

import { useQuery } from 'convex/react';
import React, { useState } from 'react'
import { api } from '../../../convex/_generated/api';
import SnippetsPageSkeleton from './_components/SnippetsPageSkeleton';
import NavigationHeader from '@/components/NavigationHeader';

function SnippetsPage() {
  const snippets = useQuery(api.snippets.getSnippets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");
  if(snippets === undefined) {
    return (
      <div className='min-h-screen'>
        <NavigationHeader />
        <SnippetsPageSkeleton />

      </div>
    );

  }

 
}

export default SnippetsPage
