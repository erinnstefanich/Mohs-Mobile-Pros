import Image from 'next/image'
import CTASection from './home/CTASection'
import FooterSection from './home/FooterSection'

type FooterContentProps = {
  home?: boolean
}

export default function FooterContent({ home = false }: FooterContentProps) {
  return (
    <>
      <div className="relative h-[30px] overflow-hidden bg-white" aria-hidden="true">
        <svg className="absolute inset-x-0 top-0 h-[22px] w-full text-brand-navy" viewBox="0 0 1440 22" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 9L180 3C360-3 540 5 720 6C900 7 1100 4 1240 2L1440 0V22H0V9Z" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-[10px] bg-brand-orange" />
      </div>
      <footer className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className={home ? 'absolute bottom-0 right-0 hidden h-[160px] w-[38%] overflow-hidden min-[900px]:block' : 'absolute bottom-0 right-0 hidden h-[190px] w-[42%] overflow-hidden lg:block'} aria-hidden="true">
          <Image src="/images/footer-he-background-clean.png" alt="" fill sizes="42vw" className="object-cover object-right-bottom opacity-80 saturate-110" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B2345_0%,rgba(11,35,69,0.96)_22%,rgba(11,35,69,0.66)_50%,rgba(11,35,69,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B2345_0%,rgba(11,35,69,0.62)_34%,rgba(11,35,69,0.08)_100%)]" />
        </div>
        {home && <CTASection home />}
        <FooterSection home={home} />
      </footer>
    </>
  )
}
