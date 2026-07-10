/* Fixed full-viewport constellation backdrop: faint triangles, lines and
   glowing dots drifting slowly — mirrors the reference site's atmosphere. */
export default function Constellation() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="constellation-svg h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g
          className="drift-a"
          stroke="#B9CBA4"
          strokeOpacity="0.14"
          strokeWidth="1.2"
        >
          <path d="M120 140 L210 90 L190 190 Z" />
          <path d="M420 60 L500 120 L410 150 Z" />
          <path d="M90 520 L160 470 L180 560 Z" />
          <path d="M300 760 L390 720 L360 820 Z" />
          <path d="M700 90 L760 40 L790 120 Z" />
          <line x1="210" y1="90" x2="420" y2="60" strokeOpacity="0.09" />
          <line x1="160" y1="470" x2="120" y2="140" strokeOpacity="0.07" />
          <line x1="390" y1="720" x2="180" y2="560" strokeOpacity="0.08" />
        </g>
        <g
          className="drift-b"
          stroke="#B9CBA4"
          strokeOpacity="0.13"
          strokeWidth="1.2"
        >
          <path d="M1380 160 L1470 120 L1450 220 Z" />
          <path d="M1180 420 L1260 380 L1240 470 Z" />
          <path d="M1420 640 L1510 610 L1480 710 Z" />
          <path d="M980 780 L1060 740 L1040 840 Z" />
          <path d="M1050 200 L1120 160 L1110 250 Z" />
          <line x1="1470" y1="120" x2="1120" y2="160" strokeOpacity="0.08" />
          <line x1="1260" y1="380" x2="1450" y2="220" strokeOpacity="0.08" />
          <line x1="1510" y1="610" x2="1240" y2="470" strokeOpacity="0.07" />
        </g>
        <g className="drift-a star-field" fill="#F4DFA6">
          {[
            [140, 250, 2],
            [320, 180, 1.5],
            [520, 340, 2],
            [240, 640, 1.6],
            [640, 560, 1.4],
            [820, 240, 1.8],
            [960, 520, 1.5],
            [1120, 90, 2],
            [1300, 300, 1.6],
            [1480, 460, 2],
            [1360, 780, 1.7],
            [760, 800, 1.5],
            [60, 820, 1.8],
            [1560, 120, 1.5],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} opacity="0.35" />
          ))}
        </g>
        <circle
          cx="1240"
          cy="180"
          r="2.4"
          fill="#F6E9C5"
          className="node-pulse"
        />
        <circle
          cx="380"
          cy="700"
          r="2.4"
          fill="#F6E9C5"
          className="node-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <circle
          cx="880"
          cy="120"
          r="2.2"
          fill="#F6E9C5"
          className="node-pulse"
          style={{ animationDelay: "2s" }}
        />
      </svg>
      {/* soft vignettes for depth */}
      <div className="ambient-glow ambient-glow-left absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-[#2E5B41]/30 blur-[160px]" />
      <div className="ambient-glow ambient-glow-right absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#57804A]/25 blur-[160px]" />
    </div>
  );
}
