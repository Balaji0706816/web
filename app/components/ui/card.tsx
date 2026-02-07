export function Card({
    className = "",
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) {
    return (
      <div className={`rounded-lg border border-zinc-200 bg-white ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardHeader({
    className = "",
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) {
    return <div className={`border-b border-zinc-200 p-4 ${className}`}>{children}</div>;
  }
  
  export function CardContent({
    className = "",
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  