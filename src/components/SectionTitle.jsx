// eslint-disable-next-line react/prop-types
export default function SectionTitle({ children }) {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight  text-white mb-8 text-center">
      {children}
    </h2>
  );
}
