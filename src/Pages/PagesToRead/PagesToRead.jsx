import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Custom Triangle Shape (for style)
const getPath = (x, y, width, height) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  },${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  },${y + height}
    Z
  `;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// 🧩 Main Component
const PagesToRead = ({ books }) => {
  // Dummy data যদি না আসে props থেকে
  const chartData =
    books && books.length > 0
      ? books.map((book) => ({
          name: book.bookName,
          pages: book.totalPages,
        }))
      : [
          { name: "Book 1", pages: 120 },
          { name: "Book 2", pages: 320 },
          { name: "Book 3", pages: 150 },
          { name: "Book 4", pages: 450 },
        ];

  return (
    <div className="w-full h-[400px] flex justify-center items-center bg-white p-6 rounded-lg shadow-md">
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
        >
          <XAxis
            dataKey="name"
            angle={-20}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top", fill: "#555", fontSize: 12 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
