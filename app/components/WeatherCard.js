export default function WeatherCard({ data }) {
  return (
    <div className="bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-2xl shadow-lg p-8 my-6 border border-blue-100 text-center">
      <h2 className="text-2xl font-bold text-blue-500 mb-2">{data.name}</h2>
      <p className="text-lg font-medium text-cyan-500 mb-2">
        {data.weather[0].description}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather icon"
        className="mx-auto my-2"
      />
      <p className="text-3xl font-extrabold text-gray-900 my-2">
        {data.main.temp}°C
      </p>
      <div className="flex justify-center gap-6 mt-2">
        <span className="text-blue-500 font-semibold">
          💨 {data.wind.speed} m/s
        </span>
        <span className="text-cyan-500 font-semibold">
          💧 {data.main.humidity}%
        </span>
      </div>
    </div>
  );
}
