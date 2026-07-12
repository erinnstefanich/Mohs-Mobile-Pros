import Image from 'next/image'

export default function MedicalVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border-[10px] border-white bg-brand-navy shadow-2xl shadow-slate-900/20 sm:min-h-[440px]">
      <Image
        src="/mohs-histology-hero.png"
        alt="Professional Mohs histology lab with microscope and prepared slides"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/70 via-brand-navy/10 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/15 bg-brand-navy/85 p-5 text-white shadow-xl backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-200">Mohs-ready lab support</p>
        <p className="mt-2 text-2xl font-bold">Histology coverage that keeps the day moving</p>
      </div>
    </div>
  )
}
