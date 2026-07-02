export default function ContactForm(){
  return (
    <section id="contact" className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-mohs-navy mb-4">Contact Us</h2>
      <p className="text-slate-700 mb-6">Tell us about your facility needs and we'll respond promptly to discuss how we can help.</p>

      <form className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input className="mt-1 block w-full border rounded px-3 py-2" type="text" name="name" aria-label="Name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input className="mt-1 block w-full border rounded px-3 py-2" type="email" name="email" aria-label="Email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Message</label>
          <textarea className="mt-1 block w-full border rounded px-3 py-2" name="message" rows={5} aria-label="Message" />
        </div>

        <div>
          <button type="submit" className="bg-mohs-navy text-white px-6 py-2 rounded">Send Message</button>
        </div>
      </form>
    </section>
  )
}
