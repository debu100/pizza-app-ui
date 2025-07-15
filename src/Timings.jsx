const Timings = ({ isOpen, openHour, closeHour }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {isOpen ? (
          <div>
            <p style={{ textAlign: "center", margin: "2.5rem 0 1.5rem 0" }}>
              We're currently <strong>open</strong>. Our Timings - {openHour}:00 am
              to {closeHour}:00 pm.
            </p>
            <button style={{ marginBottom: "1.5rem" }}>order now</button>
          </div>
        ) : (
          <p style={{ textAlign: "center", margin: "2.5rem 0 1.5rem 0" }}>
            We're currently <strong>closed</strong>. Our Timings - {openHour}:00 am
            to {closeHour}:00 pm.
          </p>
        )}
      </div>
    </div>
  );
};

export default Timings;
