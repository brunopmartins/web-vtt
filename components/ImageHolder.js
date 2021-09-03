const imageSizeStyle = {
  small: { height: "2em", width: "2em" },
  medium: { height: "5em", width: "5em" },
};

export function ImageHolder({ size, src }) {
  return (
    <div
      css={{
        display: "flex",
        padding: "0 1em",
      }}
    >
      <img css={imageSizeStyle[size]} src={src} />
    </div>
  );
}
