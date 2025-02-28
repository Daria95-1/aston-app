export const Icon = ({ className, icon, onClick }) => (
    <div className={`${className}`} onClick={onClick}>
        <i className={`bi ${icon}`} aria-hidden="true"></i>
    </div>
)
