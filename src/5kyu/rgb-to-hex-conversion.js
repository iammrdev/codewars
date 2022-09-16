// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  return [r, g, b]
    .map((channel) => {
      if (channel > 255) {
        channel = 255;
      }
      if (channel < 0) {
        channel = 0;
      }
      return channel.toString(16).padStart(2, "0");
    })
    .join("")
    .toUpperCase();
}
