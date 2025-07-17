import { useState } from 'react';
import { Line } from "react-chartjs-2";

export default function App() {
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState("");
  const [chartData, setChartData] = useState({});

  function calculate() {
    const d = new Date(date);
    d.setDate(d.getDate() + 10);
    setResult(`✅ 예상 해제일: ${d.toISOString().slice(0, 10)}`);
    setChartData({
      labels: ["Day 0", "Day 5", "Day 10", "Day 15"],
      datasets: [{
        label: "예상 종가 범위",
        data: [
          Number(price),
          Number(price) * 1.05,
          Number(price) * 1.08,
          Number(price) * 1.10
        ]
      }]
    });
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">KRX 투자주의 해제 계산기</h1>
      <input type="date" onChange={e => setDate(e.target.value)} className="border p-2 m-2" />
      <input type="number" onChange={e => setPrice(e.target.value)} placeholder="종가" className="border p-2 m-2" />
      <button onClick={calculate} className="bg-blue-500 text-white p-2 rounded">계산</button>
      <div className="mt-4">{result}</div>
      {chartData.labels && <Line data={chartData} />}
    </div>
  );
}
