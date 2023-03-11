import SlideItemComponent from "./_slideItem";

const SlideCardComponent = ({ slideOptions, setSlideOptions, options }) => {
  const manageActiveFeature = (isInc = true) => {
    const activeFeature = slideOptions.find((item) => item.isActive);
    let activeId = activeFeature.id;
    if (isInc) {
      activeId = activeFeature.id === slideOptions.length ? 1 : activeId + 1;
    } else {
      activeId = activeFeature.id === 1 ? slideOptions.length : activeId - 1;
    }

    const temp = [];
    slideOptions.forEach((entity) => {
      if (entity.id === activeId) {
        temp.push({ ...entity, isActive: true });
      } else {
        temp.push({ ...entity, isActive: false });
      }
    });
    setSlideOptions(temp);
  };
  const activeFeature = slideOptions.find((item) => item.isActive);

  setTimeout(() => {
    manageActiveFeature(true);
  }, 50000);

  return (
    <>
      {activeFeature && (
        <>
          <SlideItemComponent {...activeFeature} {...options} handleOnClick={manageActiveFeature} />
        </>
      )}
    </>
  );
};
export default SlideCardComponent;
