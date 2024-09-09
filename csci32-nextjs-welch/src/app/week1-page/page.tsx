import Image from 'next/image'
import Navbar from '../Components/Navbar'
import PageTitle from '../Components/PageTitle'
import Footer from '../Components/Footer'

export default function week1page() {
  return (
    <div>
      <div
        className="text-center min-w-screen min-h-screen p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url('/istockphoto-135341581-612x612.webp')` }}
      >
        <PageTitle title="All Books" />
        <Navbar />

        <div className="flex flex-row min-h-screen">
          <div className="text-black p-12 m-40 transition-all bg-gray-300 shadow-lg border border-red-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <h1 className="text-white px-6 text-3xl">All books A-Z</h1>
            <ul>
              <li className="hover:underline">
                <a href="#">A Town Like Alice</a>
              </li>
              <li className="hover:underline">
                <a href="#">All Quiet on the Western Front</a>
              </li>
              <li className="hover:underline">
                <a href="#">Brave New World</a>
              </li>
              <li className="hover:underline">
                <a href="#">Crime and Punishment</a>
              </li>
              <li className="hover:underline">
                <a href="#">Heart of Darkness</a>
              </li>
              <li className="hover:underline">
                <a href="#">In the Wet</a>
              </li>
              <li className="hover:underline">
                <a href="#">Jane Eyre</a>
              </li>
              <li className="hover:underline">
                <a href="#">Landfall</a>
              </li>
              <li className="hover:underline">
                <a href="#">Little Women</a>
              </li>
              <li className="hover:underline">
                <a href="#">Marazan</a>
              </li>
              <li className="hover:underline">
                <a href="#">Most Secret</a>
              </li>
              <li className="hover:underline">
                <a href="#">Of Mice and Men</a>
              </li>
              <li className="hover:underline">
                <a href="#">On the Beach</a>
              </li>
              <li className="hover:underline">
                <a href="#">Paradise Lost</a>
              </li>
              <li className="hover:underline hover:scale-110">
                <a href="PrideandPrejudice">Pride and Prejudice</a>
              </li>
              <li className="hover:underline">
                <a href="#">Requiem for a Wren</a>
              </li>
              <li className="hover:underline">
                <a href="#">The Catcher in the Rye</a>
              </li>
              <li className="hover:underline">
                <a href="#">The Great Gatsby</a>
              </li>
              <li className="hover:underline">
                <a href="#">The Old Man and the Sea</a>
              </li>
              <li className="hover:underline">
                <a href="#">The Rainbow and the Rose</a>
              </li>
              <li className="hover:underline">
                <a href="#">The Yellow Wallpaper</a>
              </li>
              <li className="hover:underline">
                <a href="#">Things Fall Apart</a>
              </li>
              <li>
                <a href="#">War and Peace</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
