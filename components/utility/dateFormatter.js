const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function DateFormatter({startDate, endDate}) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Adjust year by 2 years
  start.setFullYear(start.getFullYear() );
  end.setFullYear(end.getFullYear() );

  const startMonthYear = `${monthNames[start.getMonth()]}’${start.getFullYear().toString().slice(-2)}`;
  const endMonthYear = `${monthNames[end.getMonth()]}’${end.getFullYear().toString().slice(-2)}`;

  return `${startMonthYear} - ${endMonthYear}`;
}
