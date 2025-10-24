import { useState, useContext, createContext } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [overlayState, setOverlayState] = useState(false);

  const openOverlay = () => setOverlayState(true);
  const closeOverlay = () => setOverlayState(false);
  const toggleOverlay = () => setOverlayState((prev) => !prev);
  return (
    <PageContext.Provider
      value={{
        overlayState,
        setOverlayState,
        openOverlay,
        closeOverlay,
        toggleOverlay,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export default function usePageHooks() {
  return useContext(PageContext);
}
