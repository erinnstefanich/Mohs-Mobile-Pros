export default function Footer(){
  return (
    <footer className="bg-mohs-navy text-white py-8">
      <div className="container grid md:grid-cols-3 gap-6">
        <div>
          <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-10 mb-4" />
          <p className="text-sm text-mohs-light">Mobile Mohs surgery brought to your facility — compassionate and expert skin cancer care.</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm">Phone: (555) 555-0123</p>
          <p className="text-sm">Email: hello@mohsmobilepros.com</p>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms</p>
        </div>
      </div>

      <div className="container text-center text-sm mt-8 border-t border-mohs-navy/30 pt-4">© {new Date().getFullYear()} Mohs Mobile Pros. All rights reserved.</div>
    </footer>
  )
}
