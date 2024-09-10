import Image from 'next/image'
import Navbar from '../Components/Navbar'
import PageTitle from '../Components/PageTitle'

export default function week1page() {
  return (
    <div className="text-center min-w-screen min-h-screen p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <PageTitle title="week1page" />
      <Navbar />
    </div>
  )
}
