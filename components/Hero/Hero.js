import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        </div>
          
          <main className="mt-10  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left pt-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Life isn't perfect</span>{' '}<br />
                <span className="block text-amber-400 xl:inline ease-in">But your outfit can be</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Fashion Street is a one-stop shop for your wardrobe renewal. From floral and abstract designs to vibrant hues, we have it all! 
              You name it, we have it. So get, set, shopping!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-400 md:py-4 md:text-lg md:px-10 ">
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-amber-100 hover:bg-amber-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://thumbs.dreamstime.com/z/modern-wooden-wardrobe-clothes-hanging-rail-walk-closet-design-interior-d-rendering-148150524.jpg"
          alt="" />
      </div>
    </div>
    </div>
  )
}
