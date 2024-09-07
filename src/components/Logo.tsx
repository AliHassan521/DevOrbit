export const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 200 200"
  >
    {/* Outer Orbit Circle */}
    <circle
      cx="100"
      cy="100"
      r="85"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />

    {/* Inner Orbit Circle */}
    <circle
      cx="100"
      cy="100"
      r="55"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />

    {/* Stylized "D" */}
    <text
      x="50%"
      y="57%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="90"
      fill="currentColor"
      fontFamily="Arial"
      fontWeight="bold"
    >
      D
    </text>

    {/* Orbiting Dot */}
    <circle cx="150" cy="100" r="12" fill="currentColor" />
  </svg>
);
