import React, { FC, useState } from "react";
import Chart from "react-apexcharts";

interface AppProps {
  type:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
}

const ChartStat: FC<AppProps> = ({ type }) => {
  const [chartState, setChartState] = useState<any>({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      colors: ["#2563eb", "#d1d5db"],
      grid: {
        borderColor: "#e5e7eb",
      },
      dataLabels: {
        enabled: false,
      },
    },
    // series: [
    //   {
    //     name: "series-1",
    //     data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    //   },
    // ],
    series: [
      {
        name: "Chosen Period",
        data: [
          23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000,
          34000, 78000,
        ],
      },
      {
        name: "Last Period",
        data: [
          17000, 76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000,
          94000, 67000, 66000,
        ],
      },
    ],
  });
  return (
    <>
      <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* <!-- Header --> */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm text-gray-500 dark:text-neutral-500">
              Income
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
              $126,238.49
            </p>
          </div>
          <div>
            <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
              <svg
                className="inline-block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
              25%
            </span>
            <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
              <svg
                className="inline-block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
              2%
            </span>
          </div>
        </div>
        <Chart
          options={chartState.options}
          series={chartState.series}
          type={type}
          width={"100%"}
          height={320}
        />
      </div>
    </>
  );
};

export default ChartStat;
