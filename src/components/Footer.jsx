export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 mt-16">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/70 gap-3">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Pratibha0123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratibhasharma1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:sharmapratibha0123@gmail.com" className="hover:text-white">
            Email
          </a>
           <a
            href="https://medium.com/@sharmapratibha0123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
          Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
