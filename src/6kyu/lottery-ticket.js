// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win) {
  const result = ticket.reduce((acc, mini) => {
    const [number, code] = mini;
    const check = number
      .split("")
      .some((symbol) => symbol.charCodeAt() === code);
    return check ? acc + 1 : acc;
  }, 0);
  return result >= win ? "Winner!" : "Loser!";
}
