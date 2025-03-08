const PrimaryButton = ({ children, className = "" }) => {
  return (
    <button className={`px-6 py-3 bg-primary-500 text-white rounded-md ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
