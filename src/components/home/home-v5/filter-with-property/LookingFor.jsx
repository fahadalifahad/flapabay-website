
import Select from "react-select";

const LookingFor = () => {
  const inqueryType = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Office", label: "Office" },
    { value: "TownHome", label: "TownHome" },
    { value: "Villa", label: "Villa" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
      
    }),
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#ffc500 !important"
          : isHovered
          ? "#ffc500 !important12"
          : isFocused
          ? "#ffc500 !important12"
          : undefined,
      };
    },
  };
  return (
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default LookingFor;
