import './PulseLine.css'

// The signature element: a single line that reads as both a heart-rate
// trace and a circuit trace — the visual thread between HICT and
// Electronics/Automation. Reused as a divider with a node marking the
// "signal spike" at the point of interest.
export default function PulseLine({ variant = 'divider', className = '' }) {
  const height = variant === 'hero' ? 120 : 48
  return (
    <svg
      className={`pulse-line pulse-line--${variant} ${className}`}
      viewBox={`0 0 640 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="pulse-line__path"
        d={
          variant === 'hero'
            ? `M0 ${height * 0.5} H160 L190 ${height * 0.15} L220 ${height * 0.92} L245 ${height * 0.4} L270 ${height * 0.5} H420 L450 ${height * 0.2} L478 ${height * 0.5} H640`
            : `M0 ${height * 0.5} H240 L262 ${height * 0.2} L284 ${height * 0.8} L306 ${height * 0.5} H640`
        }
        fill="none"
      />
      <circle
        className="pulse-line__node"
        cx={variant === 'hero' ? 245 : 284}
        cy={variant === 'hero' ? height * 0.4 : height * 0.5}
        r={variant === 'hero' ? 5 : 3.5}
      />
    </svg>
  )
}
