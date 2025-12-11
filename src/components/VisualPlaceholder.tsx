type VisualPlaceholderProps = {
  label?: string;
  note?: string;
  className?: string;
};

const VisualPlaceholder = ({
  label = "Visual",
  note = "Drop in your image for this page.",
  className = "",
}: VisualPlaceholderProps) => {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm ${className}`}>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[var(--accent)]/35 via-white to-[var(--cta)]/25">
        <div className="absolute inset-0 rounded-xl border-2 border-dashed border-[var(--cta)]/40" aria-hidden />
        <div className="relative text-center">
          <p className="text-sm font-semibold text-[var(--ink)]">{label}</p>
          <p className="text-xs text-slate-600">{note}</p>
        </div>
      </div>
    </div>
  );
};

export default VisualPlaceholder;
