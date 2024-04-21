const Fireworks = () => {
    const createFireworks = () => {
        return (
            <div>
                <div class="firework"></div>
                <div class="firework"></div>
                <div class="firework"></div>
            </div>
        )
    };
  
    return <div>{createFireworks()}</div>;
  };
  
  export default Fireworks;