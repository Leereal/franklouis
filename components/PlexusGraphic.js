/* Hero graphic: a glowing low-poly ascent — triangulated wireframe rising
   left-to-right into a bright summit node. Replaces the reference site's
   wireframe hands with a growth motif in the same visual language. */
export default function PlexusGraphic() {
  const B = [
    [30, 440],
    [140, 400],
    [250, 350],
    [360, 288],
    [460, 218],
    [522, 168],
  ];
  const T = [
    [70, 358],
    [180, 316],
    [290, 258],
    [396, 196],
    [482, 128],
    [528, 88],
  ];

  const tris = [];
  for (let i = 0; i < 5; i++) {
    tris.push([T[i], B[i], B[i + 1]]);
    tris.push([T[i], T[i + 1], B[i + 1]]);
  }

  const sats = [
    [96, 152],
    [214, 108],
    [420, 388],
    [534, 300],
    [330, 78],
  ];
  const satLinks = [
    [[96, 152], T[0]],
    [[214, 108], T[1]],
    [[420, 388], B[3]],
    [[534, 300], B[4]],
    [[330, 78], T[3]],
  ];

  const pts = (a) => a.map((p) => p.join(",")).join(" ");

  return (
    <svg
      viewBox="0 0 620 500"
      className="hero-plexus w-full max-w-[560px]"
      fill="none"
      role="img"
      aria-label="Rising digital wireframe representing financial growth"
    >
      <defs>
        <linearGradient
          id="plx"
          x1="30"
          y1="440"
          x2="580"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#B9862E" stopOpacity="0.5" />
          <stop offset="1" stopColor="#F0D89A" stopOpacity="0.95" />
        </linearGradient>
        <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* faceted fills */}
      {tris.map((t, i) => (
        <polygon
          key={`f${i}`}
          className="plexus-face"
          points={pts(t)}
          fill="#D9A441"
          fillOpacity={i % 3 === 0 ? 0.14 : i % 3 === 1 ? 0.07 : 0.03}
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
      {/* mesh lines */}
      {tris.map((t, i) => (
        <polygon
          key={`l${i}`}
          className="plexus-line"
          points={pts(t)}
          stroke="url(#plx)"
          strokeWidth="1.1"
          strokeOpacity="0.8"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
      {/* satellite links */}
      {satLinks.map(([a, b], i) => (
        <line
          key={`s${i}`}
          className="plexus-link"
          x1={a[0]}
          y1={a[1]}
          x2={b[0]}
          y2={b[1]}
          stroke="#E0BE6F"
          strokeWidth="0.9"
          strokeOpacity="0.35"
          style={{ animationDelay: `${i * 0.45}s` }}
        />
      ))}
      {/* arrow head at the summit */}
      <polygon
        className="summit-arrow"
        points="590,42 488,102 534,172"
        fill="#D9A441"
        fillOpacity="0.22"
        stroke="#F0D89A"
        strokeWidth="1.4"
        filter="url(#glow)"
      />

      {/* nodes */}
      {[...B, ...T].map(([x, y], i) => (
        <g key={`n${i}`}>
          <circle cx={x} cy={y} r="5.5" fill="#D9A441" opacity="0.25" />
          <circle cx={x} cy={y} r="2.4" fill="#FCF6E3" />
        </g>
      ))}
      {sats.map(([x, y], i) => (
        <circle
          key={`sat${i}`}
          cx={x}
          cy={y}
          r="2.6"
          fill="#F6E9C5"
          className="node-pulse"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}
      {/* bright summit star */}
      <circle
        cx="590"
        cy="42"
        r="10"
        fill="#D9A441"
        opacity="0.3"
        filter="url(#glow)"
      />
      <circle cx="590" cy="42" r="4" fill="#FFFFFF" filter="url(#glow)" />
    </svg>
  );
}
