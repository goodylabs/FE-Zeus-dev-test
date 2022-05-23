import "./style.scss";
import Box from "../Box";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../../AppContext";
import { ImSpinner9 } from "react-icons/im";
import {
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    Area,
    ResponsiveContainer,
    AreaChart,
} from "recharts";

const ChartBox = () => {
    const { state } = useContext(appContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let doit;
        const onresize = () => {
            clearTimeout(doit);
            setLoading(true);
            doit = setTimeout(() => {
                setLoading(false);
            }, 500);
        };
        window.addEventListener("resize", onresize);

        return () => window.removeEventListener("resize", onresize);
    });

    return (
        <Box>
            <div className="chart-box">
                <h3 className="chart-box_title">History</h3>
                {loading ? (
                    <ImSpinner9 className="spinner" />
                ) : (
                    <ResponsiveContainer
                        width="100%"
                        height={15 * 16}
                        data={state.chartData}
                        load={loading}
                    >
                        <AreaChart
                            width="100%"
                            height={15 * 16}
                            data={state.chartData}
                            margin={{ top: 20, right: 15, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4d77ff" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#4d77ff" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPressure" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f6fc7c" stopOpacity={0} />
                                    <stop offset="95%" stopColor="#f6fc7c" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" tick={{ fill: "white" }} tickMargin={10} />
                            <YAxis yAxisId="left" tick={{ fill: "white" }} unit={` \u00B0C`} />
                            <YAxis
                                yAxisId="right"
                                tick={{ fill: "white" }}
                                orientation="right"
                                domain={["dataMin - 40", "dataMax + 40"]}
                                unit={` hPa`}
                            />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip
                                wrapperStyle={{ color: "white", fontWeight: "bold" }}
                                contentStyle={{
                                    backgroundColor: "#000000aa",
                                    color: "white",
                                    backdropFilter: "blur(8px)",
                                }}
                            />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="temperature"
                                stroke="#4D77FF"
                                fill="url(#colorTemperature)"
                                yAxisId="left"
                            />
                            <Area
                                type="monotone"
                                dataKey="pressure"
                                stroke="#F2FA5A"
                                fill="url(#colorPressure)"
                                yAxisId="right"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </Box>
    );
};

export default ChartBox;
