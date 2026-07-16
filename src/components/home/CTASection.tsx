import Link from 'next/link'
import BrochureIcon from '../BrochureIcon'
import { business } from '../../lib/site'

type CTASectionProps = {
  home?: boolean
}

export default function CTASection({ home = false }: CTASectionProps) {
  if (home) {
    return (
      <section className="relative z-10 border-b-2 border-brand-orange bg-brand-navy py-[14px] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 sm:px-6 lg:px-8 min-[900px]:grid-cols-[1fr_155px] min-[900px]:items-center xl:grid-cols-[1fr_190px]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.08em] text-brand-orange">Schedule Coverage</p>
            <h2 className="mt-1 text-[24px] font-black leading-tight xl:text-[32px]">Ready to Schedule Mohs Histology Coverage?</h2>
            <p className="mt-1 max-w-[590px] text-[12px] font-medium leading-5 text-white/88 xl:max-w-3xl xl:text-base xl:leading-7">
              Whether you need complete laboratory setup, surgery-day coverage, workflow integration, equipment support, or experienced Mohs technicians, Mohs Mobile Pros is ready to support your practice.
            </p>
          </div>
          <div className="grid gap-2.5">
            <Link href="/request-service" prefetch={false} className="btn-primary min-h-[31px] rounded px-4 py-2 text-[10px]">Request Service</Link>
            <Link href="/contact" prefetch={false} className="inline-flex min-h-[31px] items-center justify-center rounded border border-white/45 px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-brand-navy">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative z-10 h-[132px] overflow-visible bg-white">
      <svg className="absolute bottom-0 left-0 h-32 w-full text-brand-navy" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 64L120 74C240 84 480 104 720 92C960 80 1200 40 1320 46L1440 52V140H0V64Z" />
      </svg>
      <svg className="absolute bottom-0 left-0 h-20 w-full text-brand-orange" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 58L140 50C280 42 520 34 760 42C1000 50 1220 70 1440 42V90H0V58Z" />
      </svg>
      <div className="container relative z-10 -translate-y-14">
        <div className="relative mx-auto grid max-w-6xl gap-4 overflow-hidden rounded-lg border border-white/15 bg-brand-navy px-5 py-4 text-white shadow-2xl shadow-slate-900/22 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-8">
          <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-brand-orange bg-brand-navy text-white">
            <BrochureIcon name="request-service" size="md" />
          </span>
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">Ready to Schedule Service?</h2>
            <p className="mt-1 text-sm leading-6 text-white/80">Contact us today to discuss your practice&apos;s needs.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/request-service" prefetch={false} className="btn-primary min-h-10 px-6 py-2 text-xs">Request Service</Link>
            <a href={`mailto:${business.email}`} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/35 px-6 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-brand-navy">
              <BrochureIcon name="email" size="compact" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
