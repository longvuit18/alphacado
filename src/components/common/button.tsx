export default function Button({ content, className }: { content?: string, className?: string }) {
    return (
      <div className={`py-3 px-5 bg-[#142321] rounded-lg cursor-pointer ${className}`}>
        <div
          style={{
            background: '-webkit-linear-gradient(122deg, #FFE47A 35.05%, rgba(142, 255, 88, 0.90) 96.88%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {content}
        </div>
      </div>
    );
  }
  