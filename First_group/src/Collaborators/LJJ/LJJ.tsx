
const ColorButton = () => {
    return (
      <button 
        style={buttonStyle}
        onClick={() => setIsActive(!isActive)}
      >
        Click me
      </button>
    );
  };
  
  export default ColorButton;