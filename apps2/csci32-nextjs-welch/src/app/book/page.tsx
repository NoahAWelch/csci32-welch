'use client'

import AuthorHome from "../Components/Books/authorHome"
import { AuthorProvider } from "../context/authorContext"


export default function Home() {
  return (
    <AuthorProvider>
      <AuthorHome />
    </AuthorProvider>
  )
}
