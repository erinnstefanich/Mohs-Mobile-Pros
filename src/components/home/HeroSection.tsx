import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white min-[900px]:h-[363px] xl:h-[480px]">
      <div className="absolute right-0 top-0 hidden h-[338px] w-[56%] min-[900px]:block xl:h-[455px] xl:w-[58%]">
        <Image src="/images/homepage-hero-eye-contact.png" alt="Red-haired histotechnician receiving a specimen from a dermatology surgeon in a Mohs laboratory" fill priority sizes="(min-width: 1280px) 58vw, 56vw" className="object-cover object-[50%_12%]" />
        <div className="absolute inset-y-0 left-0 w-[34%] bg-gradient-to-r from-white via-white/88 to-white/0" />
      </div>
      <div className="absolute bottom-0 left-0 h-[25px] w-full bg-brand-orange" />
      <svg className="absolute bottom-[16px] left-0 h-[42px] w-full text-brand-navy" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 78C242 47 454 42 694 49C930 56 1160 80 1440 36V100H0V78Z" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-[72px] pt-[42px] sm:px-6 min-[900px]:h-full min-[900px]:flex-row min-[900px]:pb-0 lg:px-8 xl:pt-[70px]">
        <div className="max-w-[448px] premium-reveal xl:max-w-[560px]">
          <p className="eyebrow">Mobile Mohs Histology Services</p>
          <h1 className="mt-3 max-w-[440px] text-[34px] font-black leading-[1.04] text-brand-navy sm:text-[36px] xl:max-w-[560px] xl:text-[52px]">
            Professional Mobile Mohs Histology Services
          </h1>
          <div className="mt-5 h-1 w-[54px] rounded-full bg-brand-orange" />
          <p className="mt-6 max-w-[410px] text-[13px] font-medium leading-7 text-brand-navy xl:max-w-[520px] xl:text-[17px] xl:leading-8">
            Experienced on-site Mohs histology support that integrates seamlessly into your laboratory workflow while delivering precise, prompt, and professional service.
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link href="/services" prefetch={false} className="btn-secondary min-h-[36px] rounded bg-brand-navy px-6 py-2 text-[11px] text-white hover:border-brand-navy hover:bg-brand-navy hover:text-orange-200 xl:min-h-12 xl:px-7 xl:text-sm">Our Services</Link>
            <Link href="/request-service" prefetch={false} className="btn-primary min-h-[36px] rounded px-6 py-2 text-[11px] xl:min-h-12 xl:px-7 xl:text-sm">Request Service</Link>
          </div>
        </div>

        <div className="relative mt-8 min-h-[240px] w-full sm:min-h-[320px] min-[900px]:hidden">
          <div className="absolute inset-0 overflow-hidden rounded-lg border-8 border-white bg-brand-navy shadow-2xl shadow-slate-900/20">
            <Image src="/images/homepage-hero-eye-contact.png" alt="Red-haired histotechnician receiving a specimen from a dermatology surgeon in a Mohs laboratory" fill sizes="100vw" className="object-cover object-[50%_12%]" />
          </div>
        </div>
      </div>
    </section>
  )
}
