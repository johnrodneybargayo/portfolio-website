'use client';

export default function Stars() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random() * 0.7 + 0.3,
            animationDuration: Math.random() * 3 + 2 + 's',
            animationDelay: Math.random() * 2 + 's',
          }}
        />
      ))}
    </div>
  );
}
