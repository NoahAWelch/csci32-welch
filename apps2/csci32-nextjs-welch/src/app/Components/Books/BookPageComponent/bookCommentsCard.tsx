'use client'
import React, { useState } from 'react'
import PageTitle from '../../PageTitle'

export default function Comments() {
  /*const [expansionIndex, setExpansionIndex] = useState<number | null>(null);
  const toggleDetails = (index: number) => {
    setExpansionIndex((prev) => (prev === index ? null : index));
  };
  <h2
  className="cursor-pointer text-purple-700 hover:underline"
  onClick={() => toggleDetails(index)}
>  </h2>*/
  return (
    <div>
      <div
        className="text-black text-center min-w-min max-w-max min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
 <PageTitle title="Comments" />


<div className="flex flex-col p-12 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
<h1 className="" >Comment:</h1>
</div>


      </div>

    </div>
  )
}
