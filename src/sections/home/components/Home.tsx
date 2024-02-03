import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex  justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl">
          Hi, I&apos;m Michel
          <br />
          and I&apos;m a Software Engineer
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <Image
          src="/images/profile.png" // Route of the image file
          height={300} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
    </div>
  )
}

export default Home
