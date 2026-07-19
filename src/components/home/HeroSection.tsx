import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative isolate h-[363px] overflow-hidden bg-white">
      <div className="absolute right-0 top-0 hidden h-[338px] w-[56%] min-[900px]:block">
        <Image src="/images/homepage-hero-eye-contact.png" alt="Red-haired histotechnician receiving a specimen from a dermatology surgeon in a Mohs laboratory" fill priority sizes="56vw" className="object-cover object-center" />
        <div className="absolute inset-y-0 left-0 w-[34%] bg-gradient-to-r from-white via-white/88 to-white/0" />
      </div>
      <div className="absolute bottom-0 left-0 h-[25px] w-full bg-brand-orange" />
      <svg className="absolute bottom-[16px] left-0 h-[42px] w-full text-brand-navy" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 78C242 47 454 42 694 49C930 56 1160 80 1440 36V100H0V78Z" />
      </svg>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[995px] px-5 pt-[42px] min-[900px]:px-[62px]">
        <div className="max-w-[448px] premium-reveal">
          <p className="eyebrow">Mobile Mohs Histology Services</p>
          <h1 className="mt-3 max-w-[440px] text-[34px] font-black leading-[1.04] text-brand-navy sm:text-[36px]">
            Professional Mobile Mohs Histology Services
          </h1>
          <div className="mt-5 h-1 w-[54px] rounded-full bg-brand-orange" />
          <p className="mt-6 max-w-[410px] text-[13px] font-medium leading-7 text-brand-navy">
            Experienced on-site Mohs histology support that integrates seamlessly into your laboratory workflow while delivering precise, prompt, and professional service.
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link href="/services" prefetch={false} className="btn-secondary min-h-[36px] rounded bg-brand-navy px-6 py-2 text-[11px] text-white hover:border-brand-navy hover:bg-brand-navy hover:text-brand-orange">Our Services</Link>
            <Link href="/request-service" prefetch={false} className="btn-primary min-h-[36px] rounded px-6 py-2 text-[11px]">Request Service</Link>
          </div>
        </div>

        <div className="relative min-h-[320px] min-[900px]:hidden">
          <div className="absolute inset-0 overflow-hidden rounded-lg border-8 border-white bg-brand-navy shadow-2xl shadow-slate-900/20">
            <Image src="/images/homepage-hero-eye-contact.png" alt="Red-haired histotechnician receiving a specimen from a dermatology surgeon in a Mohs laboratory" fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
