function seatsInTheater(nCols, nRows, col, row) {
  const totalSeats = nCols * nRows;
  const unblockedSeats = ((col - 1) * (nRows - row)) + (row * nCols);
  return totalSeats - unblockedSeats;
}

