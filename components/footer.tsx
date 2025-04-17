import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tamirat Bizuneh</h3>
            <p className="text-sm text-muted-foreground">
              Renowned legal authority in Ethiopia with over 35 years of experience in constitutional law, human rights
              advocacy, and legal education.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/#research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Research
              </Link>
              <Link
                href="/#education"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Education
              </Link>
              <Link
                href="/#achievements"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Achievements
              </Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Bole Road, Addis Ababa, Ethiopia</p>
              <p>tamirat.bizuneh@example.com</p>
              <p>+251991439979</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© Nathenael Tamirat | +251991439979</p>
          <div className="mt-4 md:mt-0">
            <Button variant="ghost" size="sm">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
