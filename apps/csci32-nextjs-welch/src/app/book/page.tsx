'use client'
import AuthorHome from '../Components/Books/authorHome'
//import AuthorHome from '../Components/Books/BookHome'
import { AuthorProvider } from '../context/authorContext'

export default function Home() {
  return (
    <AuthorProvider>
      <AuthorHome />
    </AuthorProvider>
  )
}
