import Image from 'next/image'
import Navbar from './Components/Navbar'
import PageTitle from './Components/PageTitle'
import React from 'react'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <div>
      <div
        className="text-center min-w-screen min-h-screen p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url('/old-books-436498_640.jpg')` }}
      >
        <PageTitle title="Home" />
        <Navbar />

        <div className="flex flex-row justify-evenly">
          <div className="p-12 m-40 transition-all bg-blue-300 shadow-lg border border-red-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <a href="PrideandPrejudice">
              <h1 className="text-black px-6 text-2xl">Pride and Prejudice</h1>
            </a>
          </div>

          <div className=" p-12 m-40 transition-all bg-gray-500 shadow-lg border border-red-300 rounded-lg hover:scale-110 hover:bg-green-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <a href="book2">
              <h1 className="text-black px-6 text-3xl">book name </h1>
            </a>
            <p className="text-black ">Score out of 10</p>
            <p className="text-black ">reccomend or not</p>
            <p className="text-black ">reveiw</p>
          </div>

          <div className=" p-12 m-40 transition-all bg-pink-300 shadow-lg border border-red-300 rounded-lg hover:scale-110 hover:bg-indigo-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <a href="week1-page">
              <h1 className="text-black px-6 text-3xl">book name </h1>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-evenly">
          <div className=" p-12 m-40 transition-all bg-red-400 shadow-lg border border-red-300 rounded-lg hover:scale-110 hover:bg-blue-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <a href="week1-page">
              <h1 className="text-black px-6 text-3xl">book name </h1>
            </a>
          </div>

          <div className=" p-12 m-40 transition-all bg-indigo-300 shadow-lg border border-red-300 rounded-lg hover:scale-110 hover:bg-yellow-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <a href="week1-page">
              <h1 className="text-black px-6 text-3xl">book name </h1>
            </a>
          </div>
          <div className=" p-12 m-40 transition-all bg-green-300 shadow-lg border border-red-300 rounded-lg hover:scale-110 hover:bg-pink-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <a href="week1-page">
              <h1 className="text-black px-6 text-3xl">book name </h1>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
