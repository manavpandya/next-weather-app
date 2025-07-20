export default function ForecastCard({ forecast }) {
  const days = forecast.list.filter((_, i) => i % 8 === 0); // approx. every 24h

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
      {days.map((day, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl shadow-md p-4 border border-blue-100 text-center font-sans"
        >
          <p className="font-semibold text-blue-500 mb-1 text-base tracking-wide">
            {new Date(day.dt_txt).toLocaleDateString()}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="icon"
            className="mx-auto my-1 w-12 h-12"
          />
          <p className="font-bold text-lg text-gray-900 my-1">
            {day.main.temp}°C
          </p>
          <p className="text-cyan-500 font-semibold text-sm tracking-tight">
            {day.weather[0].main}
          </p>
        </div>
      ))}
    </div>
  );
}
