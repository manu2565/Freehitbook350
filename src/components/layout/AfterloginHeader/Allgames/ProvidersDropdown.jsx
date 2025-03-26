import React, { useState, useEffect, useRef } from 'react';


const ProviderDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedProviders, setSelectedProviders] = useState({
    cards: false,
    nkc: false,
    evolution: false,
    universe: false,
    ezugi: false,
    onetouch: false,
    'bet-games-tv': false,
    pragmatic: false,
    'bombay-live': false,
    'royal-gaming': false,
    'smartsoft-gaming': false,
    gamzix: false,
    wco: false,
  });

  // Ref to the dropdown container to detect clicks outside of it
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedProviders((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  useEffect(() => {
    // Function to handle clicks outside of the dropdown to close it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div data-v-563f50de="" className="d-flex align-items-center">
      <div
        data-v-563f50de=""
        className={`c-drop-container ${isDropdownVisible ? 'show' : ''}`}
        ref={dropdownRef} // Attach the ref to the dropdown container
      >
        <div data-v-563f50de="" className="icon_set">
          <div data-v-563f50de="" className="icon_padding">
            <i
              data-v-563f50de=""
              aria-hidden="true"
              className="fa fa-exclamation-circle show-cursor"
            ></i>
          </div>
        </div>
        <button
          data-v-563f50de=""
          className="c-drop-button px-5 provider-button"
          style={{ position: 'relative' }}
          onClick={toggleDropdown}
        >
          Providers <i data-v-563f50de="" className="fas fa-chevron-down"></i>
        </button>
        <div
          data-v-563f50de=""
          className={`c-drop-content-container ${isDropdownVisible ? 'show' : ''}`}
        >
          <div data-v-563f50de="" className="c-drop-overlay"></div>
          <div data-v-563f50de="" className="c-drop-content px-0">
            <form
              data-v-563f50de=""
              id="allProviderForm"
              className="p-0"
              data-gtm-form-interact-id="0"
            >
              {Object.keys(selectedProviders).map((provider, index) => (
                <div
                  data-v-563f50de=""
                  className="form-check provider-list-item"
                  key={provider}
                >
                  <input
                    data-v-563f50de=""
                    name={`all${provider}${index}`}
                    type="checkbox"
                    id={`gridCheckAll${index}`}
                    className="form-check-input"
                    value={provider}
                    checked={selectedProviders[provider]}
                    onChange={handleCheckboxChange}
                  />
                  <span data-v-563f50de="" className="tick">
                    ✓
                  </span>
                  <label
                    data-v-563f50de=""
                    htmlFor={`gridCheckAll${index}`}
                    className="form-check-label noselect"
                  >
                    {provider}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
      <button data-v-563f50de="" className="show-more-button d-none d-sm-block">
        Show More
      </button>
    </div>
  );
};

export default ProviderDropdown;
