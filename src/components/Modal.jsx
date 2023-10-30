// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, children }) {
    return (
        isOpen && (
            <div className="modal">
                {children}
            </div>
        )
    );
}