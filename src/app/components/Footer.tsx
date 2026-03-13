import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
            <a
              href="mailto:jenniferkropke@gmail.com"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
              jenniferkropke@gmail.com
            </a>
            <a
              href="tel:847-691-3699"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              847-691-3699
            </a>
          </div>
          <p className="text-sm text-gray-500">©2018 by Jennifer Kropke</p>
        </div>
      </div>
    </footer>
  );
}
