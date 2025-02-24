import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] flex items-center justify-center py-20">
      {/* Background decorative elements */}
      <div className="absolute top-[20%] right-[15%] md:right-[20%] lg:right-[22%] hidden md:block">
        <Image
          src="/images/star.png"
          alt="Decorative star"
          width={75}
          height={75}
          priority
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-center">
          {/* Left side circular image */}
          <div className="absolute left-4 -top-16 md:left-0 md:-top-24 lg:left-[-5%] lg:top-[-20%]">
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
              <Image
                src="/images/placeholder-child-1.png"
                alt="Happy child"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Center content */}
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#222831] mb-6 md:mb-8 font-league-spartan">
              Yapay Zeka ile
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-8 md:mb-10">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FF4D6B] relative font-indie-flower">
                keşfet
                <svg className="absolute -bottom-4 md:-bottom-6 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,1 C20,12 80,12 100,1" stroke="#FF4D6B" fill="none" strokeWidth="2.5"/>
                </svg>
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#4CAF50] relative font-indie-flower">
                eğlen
                <svg className="absolute -bottom-4 md:-bottom-6 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,1 C20,12 80,12 100,1" stroke="#4CAF50" fill="none" strokeWidth="2.5"/>
                </svg>
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#5B6BF9] relative font-indie-flower">
                öğren
                <svg className="absolute -bottom-4 md:-bottom-6 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,1 C20,12 80,12 100,1" stroke="#5B6BF9" fill="none" strokeWidth="2.5"/>
                </svg>
              </span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#222831] mb-8 md:mb-12 font-league-spartan mx-auto font-normal max-w-3xl">
              Merak eden zihinler için akıllı eğlence
            </p>
            <Link 
              href="/start"
              className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#FF4D6B] text-white font-medium rounded-full hover:bg-[#ff3956] transition-colors text-base sm:text-lg font-league-spartan"
            >
              <span>Şimdi Başla</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right side superhero image */}
          <div className="absolute right-4 bottom-[-30%] md:right-0 md:bottom-[-40%] lg:right-[-5%] lg:bottom-[-25%]">
            <div className="relative w-32 h-36 sm:w-40 sm:h-44 md:w-48 md:h-56 lg:w-64 lg:h-72">
              <Image
                src="/images/placeholder-superhero.png"
                alt="Superhero child"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 