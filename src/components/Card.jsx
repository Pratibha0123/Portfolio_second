// eslint-disable-next-line react/prop-types
export default function Card({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md " +
        className
      }
    >
      {children}
    </div>
  );
}
