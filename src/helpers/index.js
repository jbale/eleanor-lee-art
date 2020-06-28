
export const calcScreenLandscapeAspectRatio = () => {
  const width = window.screen.width;
  const height = window.screen.height;

  return width > height ? width / height : height / width;
}
