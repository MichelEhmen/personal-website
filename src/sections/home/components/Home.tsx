import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex  justify-center">
      <div className="flex flex-col justify-center">
        <div className="-rotate-3 rounded-lg bg-secondary p-4 md:p-6">
          <h1 className="text-xl font-bold text-rock sm:text-2xl md:text-3xl md:leading-9">
            Hi, I&apos;m Michel
            <br />
            and I&apos;m a
            <span className="text-primary"> Software Engineer</span>
          </h1>
        </div>
      </div>
      <div className="z-10 flex flex-col justify-center">
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
