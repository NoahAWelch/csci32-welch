import Image from 'next/image'
import Navbar from '../Components/Navbar'
import PageTitle from '../Components/PageTitle'
import Footer from '../Components/Footer'

export default function week1page() {
  return (
    <div>
      <div
        className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}
      >
        <PageTitle title="Pride and Prejudice" />
        <Navbar />
        <div className="flex flex-col p-12 m-40 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
          <p>Author: Jane Austen</p>
          <p>8 out of 10!</p>

          <p>I would reccomend this book.</p>
          <p>
            Pride and Prejudice is a book about an somewhat upper class family that ios very concious about appearances.
            The story is centered around Elizabeth Bennet and mr Darcy who seems to look down on others and is misjudged
            by the main female and eventually comes to terms with her prejudice against him. More text later.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
