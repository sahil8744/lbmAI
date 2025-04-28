const MapInstruction = ({
  phase,
  title,
  description,
  mapClassName,
  pulsCls,
}) => {
  return (
    <>
      <div
        className={`map_instructions bg-primary rounded-4 overflow-hidden  ${mapClassName}`}
      >
        <div className="inner_text p-4">
          <small className="text-white fs-4 mb-4 mb-lg-0 d-block">{phase}</small>
          <h4 className="text-white">{title}</h4>
          <p className="text-white fw-semibold lh-sm">{description}</p>
        </div>
      </div>
      <div
        class={`pulsecircle pulsee green position-absolute d-flex align-items-center ${pulsCls}`}
      >
        <span className="map_line"></span>
      </div>
    </>
  );
};

export default MapInstruction;
