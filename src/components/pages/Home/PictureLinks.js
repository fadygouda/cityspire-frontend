const jobMarkets =
  'data:image/jpeg;base64,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';

const rentalCosts =
  'data:image/jpeg;base64,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';

const bestWeather =
  'data:image/jpeg;base64,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';

const bestSchools =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU';

const safestCity =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fBhrVSzrDrMcrUCJUzcUIv4XCRbIiEJVBQ&usqp=CAU';

const arrow =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=';

export { jobMarkets, bestWeather, rentalCosts, bestSchools, safestCity, arrow };
