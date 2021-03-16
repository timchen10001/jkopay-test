export const useCancelFocus = (handleFocus: (e: any) => void) => {
  window.addEventListener("click", handleFocus);
};
