type ModalProps = {
    open: boolean;
    title?: string;
    onClose: () => void;
    children: React.ReactNode;
  };
  
  export default function Modal({ open, title, onClose, children }: ModalProps) {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 z-50">
        <button
          aria-label="Close modal"
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
        />
        <div className="relative mx-auto mt-24 w-[92%] max-w-lg rounded-lg border border-zinc-200 bg-white p-5 shadow-xl">
          {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
          <div className="mt-3 text-sm text-zinc-700">{children}</div>
  
          <div className="mt-5 flex justify-end gap-2">
            <button
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
  